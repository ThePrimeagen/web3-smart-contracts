---
path: "/the-game-start-contract"
title: "The Game : First Contract"
order: "110A"
section: "The Game"
description: "Learning how to make something more dynamic with solidity"
icon: "dumpster-fire"
---

### Lets start with the contract
* a function that takes in a `string` (class) and creates a new hash that
  represents your hero.
* You can have a list of heroes
* Heroes should have some sort of "rarity" rating.  Meaning a fighter who gets
  ok levels of stats should be have some sort of "rating" that aligns with
  their class + stats
* I am going to write code that is the closest I can to other languages.  This
  may mean inefficient code.  Sometimes non canonical code.

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

### What is memory
To keep things simple lets say that there are two types of memory.  What is
stored on or off chain.

### How to generate Randomness?
```
function random() private view returns (uint) {
    return uint(keccak256(block.difficulty, block.timestamp));
}
```

### How to ensure that class is provided correctly?
We need to compare the `class` string to make sure its something that we expect.

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

### Lets write our first test
Lets create a method to test the isClass function.

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

### Lets generate some stats
* We want to be able to generate stats, but we don't want the possibility of 5
  18 point stats.
  * 5 stat branches with a possiblity of 18.
  * I think that we should make only 1 have the possibility of 18
  * The next have possibility of 17, etc etc.

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

### A quick tutorial on memory
There are three places for memory to be stored is `storage`, `memory`, and
`calldata`. <br />

The two you should be concerned with is `memory` and `storage`.
* Memory is ephemerial, cheap
* Storage is stored on the contract, expensive af.

#### But when do I need to specify these?
On complex types
* Anything that cannot be expressed in 256 bits (32 bytes).
* Don't worry, we are going to get to bytes.

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

### How do we store this?
#### We have to deviate to bits...
TODO: Determine how much time this takes
(Draw on Gimp)

##### Exercise: Capture the Flags

### Ok back to this so called contract

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

### Randomness
Its pretty controversial.

TODO: Do I have the faucet link earlier?
* Remember that link I gave you for the faucet?  Have you been grabbing some?

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

### Lets test the game!
* Problems.  How do we test random?

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

### Lets Deploy the game!
Just like before, we simply create a deploy script.

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

### How do we interact with the contract?

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

