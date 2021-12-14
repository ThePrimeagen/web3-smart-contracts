---
path: "/solidity-basics"
title: "Solidity Language Basics"
order: "20A"
section: "Getting our feet wet"
description: "The language we use"
icon: "dumpster-fire"
---

### Solidity
If you are familiar with C based language, it will be a breeze.

#### If
```solidity
if (<boolean expr>) {
    cond
} else if (...) {
} else {
}
```

#### loops
```solidity
for (uint i = 0; i < 10; ++i) {
    ...
}
```

#### contracts
Basic building block

```solidity
contract Name {
    ...
    uint foo = 5;
    constructor() {
        // I am called once at contract deploy
    }

    function name() scope returns(type) {
        ...
    }
}
```

#### Simple Types

uint = 256 bit number
uint8, uint16, uint32, ...

strings suck

arrays
- there are dynamic and static

```
contract Foo {
    uint[] foo; // Hello I am dynamic
    function foofoo() public view {
        uint[] fooo = new uint[](10); // I am fixed array
    }
}
```

maps
- these are much different.  You cannot iterate.

```
contract Foo {
    mapping(uint => address[]) mymap;
}
```

structs
- Just like c
```
struct Foo {
    uint a;
    uint16 b;
    uint8 c;
}
mapping(uint => Foo) mymap;
Foo[] myarr;
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
<br />

### The language is simple, the concepts are hard

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
<br />

### Questions?

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
<br />

