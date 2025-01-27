# Migrations

This directory is automatically generated with MikroORM migration cli.

## How to create a new migration ?

    docker compose down -v
    docker compose up -d --build back
    docker compose exec back bun run migration:create
    docker compose cp back:/autochess/back/migrations ./back/

## How to verify a new migration ?

* Verify the `Migration*.ts` content.
* Verify the `snapshot-autochess.json` content.
* Apply code formating on the new / updated files.
* Run the migration `docker compose up --build back`.
* Check for error in back or database services.
