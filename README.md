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
yarn dev -- --open
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
