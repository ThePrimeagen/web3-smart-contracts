---
path: "/your-first-contract"
title: "Your First Contract"
order: "10A"
section: "Getting our feet wet"
description: "The initial introduction into getting a contract up and running."
icon: "dumpster-fire"
---

## Your First Contract
So where are we going to begin on this long journy?  The thing is that we have
to start with the env.  So lets get hardhat up and running.

First start with installing hard hat

```
mkdir jpegdegens
cd jpegdegens
yarn add -D hardhat
npx hardhat
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
<br />

### Typical Structure
Before we create our first contract, lets talk about folder structure.
```
jpegdegens
  - contracts
    - YourContracs.sol
    ...
  - scripts
    - deploy.ts
    ...
  - tests
    - sometest.ts
    ...
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
<br />


### Create first contract.
Create a file in contracts folder named HelloWorld.sol

#### .sol != shit out of luck
solidity, which is the programming language of ethereum.

#### Contract code
```
// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract HelloWorld {
    function hello() public pure returns (string memory) {
        return "Hello, World";
    }
}
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
<br />

### Compile time
```
npx hardhat compile
```

#### Did you get an error?
Did you get this error?
```
Error HH606: The project cannot be compiled, see reasons below.

The Solidity version pragma statement in these files don't match any of the configured compilers in your config. Change the pragma or configure additional compiler versions in your hardhat config.

  * contracts/HelloWorld.sol (^0.8.0)

To learn more, run the command again with --verbose

Read about compiler configuration at https://hardhat.org/config
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
<br />

Fix the version and lets recompile.
```
npx hardhat compile
Compiling 1 file with 0.8.4
Warning: Function state mutability can be restricted to pure
 --> contracts/HelloWorld.sol:5:5:
  |
5 |     function hello() public returns (string memory) {
  |     ^ (Relevant source part starts here and spans across multiple lines).

Compilation finished successfully
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
<br />

### We compiled... Now what?
LETS TEST!!!!

```
yarn add -D @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
```

### Typescript
```
npm install --save-dev ts-node typescript
```

### Testing types
```
npm install --save-dev chai @types/node @types/mocha @types/chai
```

Yes... its a lot of dependencies.

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

### Lets write a test!!!
one of the primary reasons why I love using hardhat so much is the fact that
there is a testing suite.  on my own personal project we not only use the
testing suite, but we also launch to other networks and run the tests on them.

First create a test folder.

```
require("@nomiclabs/hardhat-ethers");

const { ethers } = require("hardhat");
const { expect } = require("chai");


describe("Hello World", () => {
    it("should get the hello world", async () => {
        const HW = await ethers.getContractFactory("HelloWorld");
        const hello = await HW.deploy();

        expect(await hello.hello()).to.equal("Hello, World");
    });
});
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
<br />

### Execute the test
```
npx hardhat test
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
<br />


#### Failure?
```
  Testing that contract.
    1) should return a hello world


  0 passing (4ms)
  1 failing

  1) Testing that contract.
       should return a hello world:
     TypeError: Cannot read property 'getContractFactory' of undefined
      at Context.<anonymous> (test/HelloWorld.js:6:33)
      at processImmediate (internal/timers.js:461:21)

```

#### Solution
```
require("@nomiclabs/hardhat-waffle");
```

You will see this in some of the hardhat.config.js files and its very
important.  It creates ethers as a global object and as something that can be
important AND with the appropriate methods on this.


```
➜  yayayaya git:(master) ✗ npx hardhat test


  Testing that contract.
    ✓ should return a hello world (516ms)


  1 passing (519ms)
```

## A Breaking Point
### Build some foundation

Lets look at the test code one more time.

```
const expect = require("chai").expect;
const { ethers } = require("hardhat");

describe("Testing that contract.", function () {
    it("should return a hello world", async function() {
        const HW = await ethers.getContractFactory("HelloWorld");
        const helloWorld = await HW.deploy();
        expect(await helloWorld.hello()).to.equal("Hello, World");
    });
});
```

#### Lets create a deploy script.
Lets create this into a deploy script that can actually deploy our contract
onto a network.

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

### Deploy it like so
```
npx hardhat run scripts/deploy.ts --network localhost
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
<br />

#### What the Error?
```
(node:394882) UnhandledPromiseRejectionWarning: HardhatError: HH108: Cannot connect to the network localhost.
Please make sure your node is running, and check your internet connection and networks config
    at HttpProvider._fetchJsonRpcResponse (/home/mpaulson/personal/yayayaya/node_modules/hardhat/src/internal/core/providers/http.ts:176:15)
    at processTicksAndRejections (internal/process/task_queues.js:94:5)
(node:394882) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:394882) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code
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
<br />

ITS SOMEONE ELSES COMPUTER...

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

#### Lets make one local now.
```
npx hardhat node
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
<br />

### Course on developer productivity...
Its awesome, Tmux, ansible, everything, etc. etc.
TODO: Put awesome images here instead!
[Developer Productivity](https://frontendmasters.com/courses/developer-productivity/)
[Vim Fundamentals](https://frontendmasters.com/courses/vim-fundamentals/)


### Back to regularly scheduled programming.
Execute
```
> npx hardhat run scripts/deploy.ts --network localhost
```

We should see
```
HelloWorld 0x5FbDB2315678afecb367f032d93F642f64180aa3
HelloWorld Hello, World
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
<br />

