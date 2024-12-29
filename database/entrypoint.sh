#!/bin/sh
export POSTGRES_PASSWORD=$(openssl rand -base64 32 | tr -d '/+=' | cut -c1-20)
exec docker-entrypoint.sh postgres
