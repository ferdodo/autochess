#!/bin/bash

set -e

CERTS_DIR="/certs"
mkdir -p "$CERTS_DIR"

echo "Generating CA..."
openssl genrsa -out "$CERTS_DIR/ca.key" 2048
openssl req -x509 -new -nodes -key "$CERTS_DIR/ca.key" -sha256 -days 3650 -out "$CERTS_DIR/ca.crt" \
  -subj "/CN=PostgreSQL_CA"

echo "Generating keys for primary..."
openssl genrsa -out "$CERTS_DIR/primary.key" 2048
openssl req -new -key "$CERTS_DIR/primary.key" -out "$CERTS_DIR/primary.csr" \
  -subj "/CN=db-primary"
openssl x509 -req -in "$CERTS_DIR/primary.csr" -CA "$CERTS_DIR/ca.crt" -CAkey "$CERTS_DIR/ca.key" \
  -CAcreateserial -out "$CERTS_DIR/primary.crt" -days 3650 -sha256

echo "Generating keys for secondary..."
openssl genrsa -out "$CERTS_DIR/secondary.key" 2048
openssl req -new -key "$CERTS_DIR/secondary.key" -out "$CERTS_DIR/secondary.csr" \
  -subj "/CN=db-secondary"
openssl x509 -req -in "$CERTS_DIR/secondary.csr" -CA "$CERTS_DIR/ca.crt" -CAkey "$CERTS_DIR/ca.key" \
  -CAcreateserial -out "$CERTS_DIR/secondary.crt" -days 3650 -sha256

rm "$CERTS_DIR/"*.csr

chown -R "$POSTGRES_USER:$POSTGRES_USER" "$CERTS_DIR"
chmod 777 "$CERTS_DIR/"*.key
chmod 777 "$CERTS_DIR/"*.crt
