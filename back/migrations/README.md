# Migrations

This directory is automatically generated with MikroORM migration cli.

## How to create a new migrations ?

    docker compose down -v
    docker compose up -d --build back
    docker compose exec back bun run migration:create
    docker compose cp back:/autochess/back/migrations ./back/
