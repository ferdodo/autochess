#!/bin/bash
set -e

SSL_CERT_DIR=/etc/postgresql/ssl

primary_is_ready() {
    pg_isready -h database -U "$POSTGRES_USER"
}


setup_keys() {
	mkdir -p "$SSL_CERT_DIR"
	cp /certs/secondary.key "$SSL_CERT_DIR/server.key"
	cp /certs/secondary.crt "$SSL_CERT_DIR/server.crt"
	cp /certs/ca.crt "$SSL_CERT_DIR/ca.crt"
	chown postgres:postgres "$SSL_CERT_DIR/server.key" "$SSL_CERT_DIR/server.crt" "$SSL_CERT_DIR/ca.crt"
	chmod 600 "$SSL_CERT_DIR/server.key"
	chmod 644 $SSL_CERT_DIR/server.crt $SSL_CERT_DIR/ca.crt
	echo "ssl = on" >> "$PGDATA/postgresql.auto.conf"
	echo "ssl_cert_file = '$SSL_CERT_DIR/server.crt'" >> "$PGDATA/postgresql.auto.conf"
	echo "ssl_key_file = '$SSL_CERT_DIR/server.key'" >> "$PGDATA/postgresql.auto.conf"
	echo "ssl_ca_file = '$SSL_CERT_DIR/ca.crt'" >> "$PGDATA/postgresql.auto.conf"
}

configure_replication() {
	echo "primary_conninfo = 'host=database port=5432 user=$POSTGRES_USER sslmode=verify-full sslcert=$SSL_CERT_DIR/server.crt sslkey=$SSL_CERT_DIR/server.key sslrootcert=$SSL_CERT_DIR/ca.crt'" >> "$PGDATA/postgresql.auto.conf" 
    echo "hot_standby = on" >> "$PGDATA/postgresql.auto.conf"
}

chmod 600 "/certs/secondary.key"
chmod 644 /certs/secondary.crt /certs/ca.crt

while ! primary_is_ready; do
	echo "Waiting for primary..."
	sleep 2
done

export POSTGRES_PASSWORD=$(openssl rand -base64 32 | tr -d '/+=' | cut -c1-20)

export PGSSLMODE=verify-full
export PGSSLROOTCERT=/certs/ca.crt
export PGSSLKEY=/certs/secondary.key
export PGSSLCERT=/certs/secondary.crt

pg_basebackup -h database -D "$PGDATA" -P -U "$POSTGRES_USER"
psql "postgresql://user@database:5432/autochess?sslmode=require"  -c "SELECT pg_create_physical_replication_slot('autochessreplication');"
setup_keys
configure_replication
touch "$PGDATA/standby.signal"
exec docker-entrypoint.sh postgres
