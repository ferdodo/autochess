#!/bin/bash
set -e

setup_keys() {
    cp /certs/primary.key "$PGDATA/server.key"
    cp /certs/primary.crt "$PGDATA/server.crt"
    cp /certs/ca.crt "$PGDATA/ca.crt"
    chown postgres:postgres $PGDATA/server.key $PGDATA/server.crt $PGDATA/ca.crt
    chmod 600 $PGDATA/server.key
    chmod 644 $PGDATA/server.crt $PGDATA/ca.crt
    echo "ssl = on" >> "$PGDATA/postgresql.auto.conf"
    echo "ssl_cert_file = '$PGDATA/server.crt'" >> "$PGDATA/postgresql.auto.conf"
    echo "ssl_key_file = '$PGDATA/server.key'" >> "$PGDATA/postgresql.auto.conf"
    echo "ssl_ca_file = '$PGDATA/ca.crt'" >> "$PGDATA/postgresql.auto.conf"
}

configure_replication() {
    echo "listen_addresses = '*'" >> $PGDATA/postgresql.auto.conf
    echo "wal_level = replica" >> $PGDATA/postgresql.auto.conf
    echo "max_wal_senders = 10" >> $PGDATA/postgresql.auto.conf
    echo "wal_keep_size = 1GB" >> $PGDATA/postgresql.auto.conf
    echo "host replication $POSTGRES_USER all md5" >> $PGDATA/pg_hba.conf
    echo "hostssl replication $POSTGRES_USER all cert" >> $PGDATA/pg_hba.conf
}

configure_replication
setup_keys
