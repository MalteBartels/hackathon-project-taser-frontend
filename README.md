# Project Taser

Project Taser is Hackathon Project at university of Stuttgart, to track students level of comprehension in real time through a highly scalable microservice architecture and a Svelte based web app (because why make it simple when you only got 48 hours).

To concept is simple: All students have the app. If one is lost, he:she presses the "lost" button.
The professor can see the percentage of lost students in realtime on his:her device. 
If too many students are lost, the professor gets an electrical shock through an IOT device attached to the body (feature pending due to legal concerns).

Find the original code and backend (here)[https://github.com/Hackathon-22-Project-Taser].

## Developing
Install the required dependencies:
```shell
yarn
```

Start a development server:

```shell
yarn dev
```
or start the server and open the app in a new browser tab
```shell
yarn dev --open
```

## Building

To create a production version of your app:

```bash
yarn build
```

You can preview the production build with `yarn preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Adapter

This repo is configured with the node adapter. So as build result in the folder `build`, you will get an executable node application. Run it by running `node index.js` in the build folder.
