---
path: "/the-game-size-of-contract"
title: "The Game : Size of Contract"
order: "112A"
section: "The Game"
description: "Learning how to make something more dynamic with solidity"
icon: "dumpster-fire"
---

### Size is a problem
Lets get the size of the bytecode
```
cat artifacts/contracts/Heroes.sol/Heroes.json | jq .deployedBytecode | wc -c
```


