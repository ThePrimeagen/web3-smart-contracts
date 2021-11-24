---
path: "/solidity-gas"
title: "Gas"
order: "40A"
section: "Solidity"
description: "Learning the fundamentals of the language"
icon: "dumpster-fire"
---

### Perhaps the most important of everything
Gas.  How expensive is what I am doing?

#### What is gas?
Its the cost, in ethers, for the transaction.  The typical measurement for gas
is `gwei`.  `gwei` is 10^9 `wei`.  In other words, its giga weis.

* wei is the fundamental unit of ether.  Its like our pennies.
* gwei = 10^9 * wei
* ether = 10^18 wei

#### How does gas price work?
To understand you need to understand two things.

1. what a virtual machine is
2. The current cost of gas. [Opcode and its associated prices.](https://github.com/crytic/evm-opcodes)

#### What is a virtual machine.
(Use gimp theprimeagen)

#### Ok, so I know about the vm, how much does it cost?
> Typical measurement for gas is in `gwei`

But how much is that?
```
gas-cost * gas-used * 10^9 * eth-cost / 10^18
// Or simplified as
gas-cost * gas-used * eth-cost / 10^9
```

#### An easier way to learn about cost is with exploring.
##### Lets build some contracts and watch the price change as we do things.
So lets do some basic programs and start finding out what things cost.

- base function, set counter.
- base function + return const
- base function + create var + return var
- base function + create var + return var + pass in var
- base function + create var + return var + pass in var + return var * pass in var

##### Key Takeaway
Everything you do costs money.  Be careful.  Let me rant for a second.

#### A cool gas reporter
[Gas Reporter](https://github.com/cgewecke/hardhat-gas-reporter)
```
yarn add -D hardhat-gas-reporter
```
