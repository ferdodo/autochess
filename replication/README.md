# Replication

Live backup for the database.

```mermaid
sequenceDiagram
  participant DB as Database
  participant RP as Replication

  opt On first time
    note over RP: ./init.sh
    activate RP
    RP ->> RP: Configure
    DB ->> DB: Starts up
    RP -->> DB: Wait database startup
    RP <<->> DB: Copy every tables
    RP ->> DB: Activate replication
    deactivate RP
  end
    RP ->> RP: Starts up


  loop indefinitly
    DB-->>RP: Replicate database
  end
```