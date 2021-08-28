# Screeps Template

## What this is

-   It sets up Grunt to let you push your code to the Screeps server. (official or private)
-   It gives you a way to store your API key without accidentally committing it to Git.
-   It enables you to use TypeScript. (optional)

## What this isn't

-   It's not a framework.
-   It doesn't actually do anything in the game. It only comes with an empty loop function.

## How to use it

### Prerequisites

-   [Node.js / NPM](https://nodejs.org/)
-   [Grunt](https://gruntjs.com/) (Install with `npm install -g grunt-cli` or refer to the website - requires Node.js)

### Setup

Clone this repository or just download it locally. Then run `npm install` to download and install all dependencies to the _node_modules/_ directory.

Copy the file _.env.example_ and name it just ".env" without the ".example". Open it in your editor and fill in the `API_USER`, `API_PASSWORD` and optionally the `SCRIPT_BRANCH` values.

On the official server, `API_USER` will be your e-mail address and `API_PASSWORD` will be an Auth Token. To obtain an Auth Token for Screeps, visit the [Screeps Website](https://screeps.com/), log in and go to "Manage account". From there, create an Auth Token and paste it into your _.env_ file.

If you want to use a private server, uncomment `SERVER_HOST` and optionally `SERVER_PORT` and fill them in. You will also need to install screepsmod-auth to your server. If you're using a the Steam client local server, you can subscribe to it on the workshop.

### Writing code

Your Screeps code goes inside the _src/_ directory. You can use ES6 modules as demonstrated in _main.js_.

```js
export function loop() {
    console.log(Game.time);
}
```

### TypeScript

TypeScript is fully optional. To use it, simply rename some or all of your .js files to .ts. The template already comes with a _tsconfig.json_. Feel free to change it. Just make sure to not change `compilerOptions.rootDir`, `compilerOptions.outDir` and `includes`.

### Pushing your code to the server

To push your code to the server, simply run `grunt`.
