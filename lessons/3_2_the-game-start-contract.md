---
path: "/the-game-the-contract"
title: "The Game : The Contract"
order: "320A"
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
  * There can only be _up to_ one 18, one 17, etc etc
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
function generateRandom() public view returns (uint) {
    return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp)));
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

### Lets talk bits and information

```javascript
function _what_is_my_name_(a: number, b: number): boolean {
    return a & b === b;
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

### First lets talk boolean logic
* and
* or
* not
* exclusive or

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### Bases
What are bases?

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### Questions
Ask the questions

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### Binary Positions and Implications
* What is numbers in Decimal
* What is numbers in Binary
* multiplying by 2 (don't forget shift)
* Work through some examples
* Quick Mafs
* Logic Operations
* BLOW YOUR MIND
* Double make sure you know about Hex plus shifting

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### Lets get back to that contract

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />



