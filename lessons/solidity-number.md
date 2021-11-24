---
path: "/solidity-numbers"
title: "Numbers"
order: "20A"
section: "Solidity Fundamentals"
description: "Learning the fundamentals of the language"
icon: "dumpster-fire"
---

### Solidity
The language of ether

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

TODO: Note about not knowing the solidity language.  Using Cheatsheet.

### The Counter Contract
Lets make a contract that every time its called it increments by one.

Remember, I am not going to teach you just Solidity.  We are going to try to
make this a very well rounded approach to learning how to program contracts.

#### Important side note, lets use this
```
import "hardhat/console.sol";
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

#### Complete Code
##### Contract Code
```
// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
    uint private counter;
    function count() public returns (uint) {
        counter++;
        console.log("counter", counter);
        return counter;
    }
}
```
##### Deploy Script
```
import _ from "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy() {
    const C = await ethers.getContractFactory("Counter");
    const counter = await C.deploy();
    console.log(await counter.count());
}

deploy();
```

##### Output
```
{
  hash: '0xdd3ed28ae1706b0c602b148225a792723c7b6e8882a7ce46de9bb097965631a6',
  type: 2,
  accessList: [],
  blockHash: '0x773274e5ef072d8ff8c024b774af44c4ac04978c59552e783e215bc5dcc0ef73',
  blockNumber: 10,
  transactionIndex: 0,
  confirmations: 1,
  from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
  gasPrice: BigNumber { _hex: '0x0fe0c2de', _isBigNumber: true },
  maxPriorityFeePerGas: BigNumber { _hex: '0x00', _isBigNumber: true },
  maxFeePerGas: BigNumber { _hex: '0x141876a0', _isBigNumber: true },
  gasLimit: BigNumber { _hex: '0xb8f8', _isBigNumber: true },
  to: '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6',
  value: BigNumber { _hex: '0x00', _isBigNumber: true },
  nonce: 9,
  data: '0x06661abd',
  r: '0x78300d5ce5a0f443153f4fb01fa352dba00d03a29b32edb428d510db81de9467',
  s: '0x77135829f88da53c7f318787bc202fad4ae5ab130baac89d5aec11b43fcc5a82',
  v: 1,
  creates: null,
  chainId: 31337,
  wait: [Function]
}
```

##### Ether chain output
```
  Contract call:       Counter#count
  Transaction:         0xb7df53fe40df541c52fac6e3cac0194e4e657d398c429490e52db986d56d8014
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x0165878a594ca255338adfa4d48449f69242eb8f
  Value:               0 ETH
  Gas used:            47352 of 47352
  Block #8:            0x617d3cdd8cfdbfc8ad50b94a85ebd67f35da73ff36a52d9a4fe869c860f7e741

  console.log:
    counter 1

eth_chainId
eth_getTransactionByHash
```

#### Two things are wrong
1.  If we re-execute our deploy script, we keep seeing 1.
2.  If print the output, we get a bunch of non-sense.

#### Rule of Thumb
You can only get data out from `view` or `pure` functions.
* `view` functions are functions that do not change the contracts state.
* `pure` cannot read or write state on the contract.

```
// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Foo {
    uint foo = 9;
    uint bar = 6;

    function viewFoo() public view returns (uint) {
        return foo + bar * 10;
    }

    function pureFoo() public pure returns (uint) {
        return 6 * 10 + 9;
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

### Lets do it again, but create a view

```
// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
    uint private _counter;
    function count() public returns (uint) {
        _counter++;
        console.log("finishing count", _counter);
        return _counter;
    }

    function getCounter() public view returns (uint) {
        return _counter;
    }
}
```

#### Deploy Script
```
import _ from "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy() {
    const C = await ethers.getContractFactory("Counter");
    const counter = await C.deploy();
    console.log("Counter", await counter.getCounter());
    await counter.count();
    console.log("Counter", await counter.getCounter());
    await counter.count();
    console.log("Counter", await counter.getCounter());
}

deploy();
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

### Output

```
> npx hardhat run scripts/deploy-number.ts --network localhost
Counter BigNumber { _hex: '0x00', _isBigNumber: true }
Counter BigNumber { _hex: '0x01', _isBigNumber: true }
Counter BigNumber { _hex: '0x02', _isBigNumber: true }
```

### Ether Chain Results
Notice the difference this time.  We have an `eth_sendTransaction` to describe
the incrementing and an `eth_call` for getting the `view` information out.

```
eth_sendTransaction
  Contract call:       Counter#count
  Transaction:         0x9e8b19360b7fe6b12da7557dc8f9c55bd738a333a66a37750c1f7f4100a17039
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xdc64a140aa3e981100a9beca4e685f962f0cf6c9
  Value:               0 ETH
  Gas used:            30252 of 30252
  Block #7:            0x5258fabe5c5783961c67bf784c98f8456e49b37ef26670e38e896c64d87dc79d

  console.log:
    finishing count 2

eth_chainId
eth_getTransactionByHash
eth_chainId
eth_call
  Contract call:       Counter#getCounterSmall
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xdc64a140aa3e981100a9beca4e685f962f0cf6c9
```

#### Why BigNumber?

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

### Whats the size of an int?

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

### It depends is the only answer
* JavaScript Number: 2\*\*53 - 1
* Rust: i32
* Cpp: depends on arch or you can use `uint32_t`
* Solidity: 256 bits - 32 bytes

#### Why BigInt?
* 256 bits > 2 \*\* 53 - 1
* BigInt allows for large decimal values.

#### Lets do an experiment
Lets return a smaller than 53 bit number!

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

### Complete Code Example
#### Contract
```
// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
    uint private _counter;
    function count() public returns (uint) {
        _counter++;
        console.log("finishing count", _counter);
        return _counter;
    }

    function getCounter() public view returns (uint) {
        return _counter;
    }

    function getCounterSmall() public view returns (uint32) {
        return uint32(_counter);
    }
}
```
#### Deploy
```
import _ from "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy() {
    const C = await ethers.getContractFactory("Counter");
    const counter = await C.deploy();
    console.log("Counter", await counter.getCounterSmall());
    await counter.count();
    console.log("Counter", await counter.getCounterSmall());
    await counter.count();
    console.log("Counter", await counter.getCounterSmall());
}

deploy();
```

#### Results
```
npx hardhat run scripts/deploy-number.ts --network localhost
Compiling 1 file with 0.8.4
Compilation finished successfully
Counter 0
Counter 1
Counter 2
```

### Why?
Its not ethereum that is smart here, its `ethersjs`.

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
