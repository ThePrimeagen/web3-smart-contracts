---
path: "/the-game"
title: "The Game : Intro"
order: "100A"
section: "The Game"
description: "Learning how to make something more dynamic with solidity"
icon: "dumpster-fire"
---

### Its time to take our contracts to the next level.
We need a project to take our contract to the next level.

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

#### The best way to learn
TIME IN THE SADDLE

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### But what is the saddle?

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### The idea
I love the idea of RPGs.

### Design
* We want to be able to generate random Hereos.
* The user gets to put in their class of hereo on generation
  * Class will not influence stats created, therefore getting an epic hero will
    be hard.
  * classes: Mage, Healer, Barbarian
* stats are randomly generated
  * stats are strength, health, intellect, magic, dexterity
  * A scale of 1 - 18
* We need a website to generate them from and display your collection.
TODO: Determine if I can get here or not.
* We probably don't want these to be fungable...

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

#### Why not more specific solidity learning?
* You can learn everything you ever wanted from
  [Solidity](https://docs.soliditylang.org/en/v0.8.0/introduction-to-smart-contracts.html).
  So it seems a bit redundant to just recreate the same tutorial.  Lets make
  something instead.
* As we build we will learn

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### We are going to build a contract that _could_ become an NFT
* Every nft is identified by a 256 bit number (hash).
* They cannot be subdivided
* They can be transferred
* I am more worried about teaching how to write a contract than to create an
  NFT specifically.

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### The Solidity Side
We will keep everything the same.  `contracts`, `scripts`, and `test` will be
the primary locations for our programming.

### The JavaScript Side
#### Base project
- create src/index.html and index.ts

#### Webpack sucks -- Here is the code.
```
const dotenv = require("dotenv");
dotenv.config();

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.ts", // bundle"s entry point
    output: {
        path: path.resolve(__dirname, "dist"), // output directory
        filename: "[name].js", // name of the generated bundle
    },
    resolve: {
        extensions: [".js", ".ts", ".json"],
    },

    mode: "development",

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },

            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: "body",
        }),
    ],

    watch: true,

    devServer: {
        historyApiFallback: true,
        contentBase: './',
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }
};
```

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
