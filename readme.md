# Project Title

Api Rest example with Deno and Oak

## Getting Started

Clone the project and launch with

```
deno run --allow-net server.ts
``` 
No local dependencies installing, package.json, npm or yarn used, only "deno run" !!


### Prerequisites

You will need to have deno installed in your system to use this project

* [Deno](https://deno.land/) - Deno, new js framework from the creator of node.js
* [Deno Installation Guide](https://deno.land/#installation) - Deno Installation guide


### Installing

You could install the api rest server with 

```
deno install --allow-net server.ts 
``` 

This will install a executable on your system, to use with 

```
server
``` 

Yai!!!

## Running the tests

You can run the testing with 
```
deno test
``` 

## CI

while we find somewhere to store the projects, the push on master or pr will launch a github Action to check tests

## Built With

* [Deno](https://deno.land/) - Deno, new js framework from the creator of node.js
* [Typescript](https://www.typescriptlang.org/) - Javascript that scales
* [Oak](https://deno.land/x/oak) - A middleware framework for Deno's http server, including a router middleware.
