🎯 Better code organization with exportcase

We've adopted exportcase, a TypeScript validator that enforces strict export conventions across the project. It ensures: each file exports exactly one entity, all exports are named (no defaults), and filenames match what they export.

This structure makes code navigation predictable and eliminates the chaos of mixed export styles. Rules are validated automatically in the build.

https://ferdodo.github.io/exportcase/
