# Prometheus

Prometheus stores backend metrics.

You need to setup data visualization yourself. Grafana is recommended to easily setup Prometheus as data source and start creating your own dashboards.

```mermaid
graph TD;
    A@{ shape: lin-cyl, label: "Prometheus" }
    B["Backend"]
    C["Backend"]
    D["Backend"]
    E["Data visualization"]

    A-->B;
    A-->C;
    A-->D;
    E-->A;
```
