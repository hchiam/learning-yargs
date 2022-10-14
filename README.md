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
node my-cli # you don't need the .js!
node my-cli --help # --help doc comes for free!
node my-cli --version # --version comes for free!
node my-cli hello --name Howard # hello command with name argument
node my-cli hello # will use fallback/default value
node my-cli hello Howard # positional argument
node my-cli bye Howard # another command
node my-cli --help bye # info on specific command (args, etc.)
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

And then run any of the `node my-cli.js` commands above.

## Example using yargs with a default of no params, and reading a settings file

https://github.com/hchiam/yargs_settings_test
