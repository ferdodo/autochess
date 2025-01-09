# coverage

Coverage is a service that runs mutation service on core.

This service is automatically built when making new commits, to ensure that modified and added code is properly tested.

See https://stryker-mutator.io to learn more about mutation testing.

## How to execute mutation testing, and generate a report

To build the mutation testing report, run:

```
docker compose up -d --build coverage
```

## How to access the mutation testing report ?

The report is very useful for detecting which part of the core needs the most testing.

You can access the report locally after building it at http://localhost:6245
