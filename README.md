# Learning [`yargs`](https://www.npmjs.com/package/yargs)

Just one of the things I'm learning. <https://github.com/hchiam/learning>

<https://yargs.js.org> (and I might also like to use <https://www.npmjs.com/package/glob>)

You can even run `yargs` in the browser: <https://github.com/yargs/yargs/blob/75f98fbd7997c6cfbf04998844ebea0a8e09c2fc/docs/browser.md> (Live demo: <https://codepen.io/hchiam/pen/BazLBax>)

## Starting by adding `yargs` from scratch

Using [`yarn`](https://github.com/hchiam/learning-yarn):

```bash
yarn add yargs
```

Or with `npm`:

```bash
npm install yargs
```

And then create `my-cli.js` and run any of these commands in CLI:

```bash
node my-cli.js
node my-cli.js --help # --help doc comes for free!
node my-cli.js --version # --version comes for free!
node my-cli.js hello --name Howard # hello command with name argument
node my-cli.js hello # will use fallback/default value
node my-cli.js hello Howard # positional argument
node my-cli.js bye Howard # another command
node my-cli.js --help bye # info on specific command (args, etc.)
```

## Starting by testing out this repo

Using [`yarn`](https://github.com/hchiam/learning-yarn): (triple-click to select all)

```bash
git clone https://github.com/hchiam/learning-yargs.git; cd learning-yargs; yarn;
```

Or with `npm`: (triple-click to select all)

```bash
git clone https://github.com/hchiam/learning-yargs.git; cd learning-yargs; npm install;
```
