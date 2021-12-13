---
path: "/counter"
title: "The Counter Contract"
order: "110A"
section: "Solidity Fundamentals"
description: "Learning the fundamentals of the language"
icon: "dumpster-fire"
---

### The Counter Contract
Lets make a contract that every time its called it increments by one.

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

#### Lets create a counter contract

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

### Storage is extremely expensive
You altered state.  You pay for it.

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

### We are going to re-execute our deploy script
what is going to happen?

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

#### Two things that may have surprised you
1.  If we re-execute our deploy script, we keep seeing 1.
2.  If print the output, we get a bunch of non-sense.

Lets talk about each!

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

### 1.  Why does it keep display 1?
Lets look at our script again and its output

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

### 2.  What is with the output?
Well, we altered state, which required a `eth_transaction`.  Which means you
need to have several confirmations before its considered "set."

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

#### Rule of Thumb
You can only get data out from `view` or `pure` functions.
1.  NO MONEY
1.  NO MONEY
1.  NO TX

This only works with _readonly_ functions.

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

### The Read Only Functions
* `view` functions are functions that do not change the contracts state.
* `pure` cannot read or write state on the contract.

#### Since were here... Scopes
Lets break down these different meanings of `public`, `private`, `internal`,
`external`

```
+------------+------------+-------------+--------------+--------------+
|            |   public   |   private   |   internal   |   external   |
+------------+------------+-------------+--------------+--------------+
|  Contract  |    yes     |     yes     |     yes      |      no      |
|  can call  |            |             |              |              |
+------------+------------+-------------+--------------+--------------+
| SubContract|    yes     |     no      |     yes      |      no      |
|  can call  |            |             |              |              |
+------------+------------+-------------+--------------+--------------+
|  Outside   |    yes     |     no      |     no       |      yes     |
|  can call  |            |             |              |              |
+------------+------------+-------------+--------------+--------------+
```


#### Lets rewrite our counter contract and separate it out.

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

### Lets call that getCount function!
Lets update our deploy script.

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
  * 9007199254740991.0
* Rust: i32
* Cpp: depends on arch or you can use `uint32_t`
* Solidity: 256 bits - 32 bytes

#### Why BigNumber?
* 256 bits > 2 \*\* 53 - 1
* BigNumber allows for large decimal values.

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

### Lets make a small website that displays the count

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

### That was a lot to take in
Questions?

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

### I am not done here... Lets deploy this somewhere else..
In a rinkeby far far away...

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
