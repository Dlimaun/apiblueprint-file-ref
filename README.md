# apiblueprint-file-ref
This is a simple project to use file references to build a [apiblueprint](https://apiblueprint.org/) markdown file.
Our main focus is on [Apiary](apiary.io) but this probly works for everything.

## Prepare
Create your blueprint.
Whenever you want to include another file, use `"$ref <filename>".
The **linked files** can *link* other files.
Be careful of ciclic links.

## Run
This command will create a single file.

    node build.js <your blueprint with refs tags>


## TODOs
* Make this a command line, to call it directly, like `api-refs ...`. (or something like that)
* Add Tests
* Add to npm repository
* Add example

## How help
You can do anything!
* Know how to publish it on npm repository?
* Think in a way of test or want to add a new test?
* Know a better way of do this?
* Want to add some new feature?
Just [create a issue](https://github.com/Dlimaun/apiblueprint-fileref/issues/new).
If you know how implement, fork and send a pull request.
