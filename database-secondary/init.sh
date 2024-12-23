#!/bin/bash
set -e

setup_keys() {
    cp /certs/secondary.key "$PGDATA/server.key"
    cp /certs/secondary.crt "$PGDATA/server.crt"
    cp /certs/ca.crt "$PGDATA/ca.crt"
    chown postgres:postgres "$PGDATA/server.key" "$PGDATA/server.crt" "$PGDATA/ca.crt"
    chmod 600 "$PGDATA/server.key"
    chmod 644 $PGDATA/server.crt $PGDATA/ca.crt
    echo "ssl = on" >> "$PGDATA/postgresql.auto.conf"
    echo "ssl_cert_file = '$PGDATA/server.crt'" >> "$PGDATA/postgresql.auto.conf"
    echo "ssl_key_file = '$PGDATA/server.key'" >> "$PGDATA/postgresql.auto.conf"
    echo "ssl_ca_file = '$PGDATA/ca.crt'" >> "$PGDATA/postgresql.auto.conf"
}

configure_replication() {
    echo "primary_conninfo = 'host=database port=5432 user=$POSTGRES_USER'" >> "$PGDATA/postgresql.auto.conf"
    echo "hot_standby = on" >> "$PGDATA/postgresql.auto.conf"
}

setup_keys
configure_replication
touch "$PGDATA/standby.signal"

