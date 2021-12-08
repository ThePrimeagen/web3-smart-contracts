---
path: "/the-game-the-contract"
title: "The Game : The Contract"
order: "210A"
section: "The Game"
description: "Learning how to make something more dynamic with solidity"
icon: "dumpster-fire"
---

### Design
* We want to be able to generate random Hereos.
* The user gets to put in their class of hereo on generation
  * Class will not influence stats created, therefore getting an epic hero will
    be hard, chance wise.
  * classes: Mage, Healer, Barbarian
* stats are randomly generated
  * stats are strength, health, intellect, magic, dexterity
  * A scale of 1 - 18
* We need a website to generate them from and display your collection.
* We probably don't want these to be fungable...  BUT we will not have time to implement ERC721, nor VRF

#### WE WILL TEST TOO
Its important to get into the habbit.

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### But remember how I told you I did other front end masters?
TODO: Get that image and link

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />


### Things for me not to forget
#### How to generate Randomness?
```
function random() private view returns (uint) {
    return uint(keccak256(block.difficulty, block.timestamp));
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

