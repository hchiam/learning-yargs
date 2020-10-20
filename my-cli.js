#!/usr/bin/env node

require("yargs")
  .scriptName("my-cli")
  .usage("$0 <cmd> [args]")
  .command(
    "hello [name]", // <-- this string is NOT documentation!
    "welcome to yargs!", // <-- this string IS for the help printout
    (yargs) => {
      yargs.positional("name", {
        type: "string",
        default: "<FALLBACK_VALUE>",
        describe: "the name to say hello to",
      });
    },
    function (argv) {
      console.log(`Hello ${argv.name}, welcome to yargs!`);
    }
  )
  .command(
    "bye [some_argument] [num]", // <-- this string is NOT documentation!
    "Command description.", // <-- this string IS for the help printout
    (yargs) => {
      yargs
        .positional("some_argument", {
          type: "string",
          default: "<FALLBACK_VALUE>",
          describe: "Argument description.",
        })
        .positional("num", {
          type: "number",
          default: "<FALLBACK_VALUE>",
          describe: "Argument description.",
        });
    },
    function (argv) {
      let output = `Bye ${argv.some_argument}, you've tried out yargs. `;
      if (argv.num) output += `You also chose this number: ${argv.num}.`;
      console.log(output);
    }
  )
  .help().argv;
