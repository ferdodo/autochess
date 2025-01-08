# core benchmark

This directory contains benchmarks that runs specific parts of the code. The purpose is to measure code execution speed, and gather data to help identify bottlenecks.

## How to generate CPU profiling data ?

This is a bit cumberstone to do atm, but hopefully code optimization is not needed everyday.

First run one of the benchmark:

```
$ docker compose run --build core bash
root@<container>$ ./benchmark/< ... >.benchmark.sh
```

It will run the benchmark using the Node.Js `--cpu-prof` that will create file containing profiling data.

Then retrieve this file:

```
docker cp <container ref>:/autochess/core/CPU.<...>.cpuprofile ./my-analysis.cpuprofile
```

## How to visualize CPU profiling data ?

With chrome, open the devTools, drag and drop the file in the performance tab.

With firefox, go to https://profiler.firefox.com and load the file.