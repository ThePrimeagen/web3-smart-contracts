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
  * classes: Mage, Healer, Barbarian
  * Class will not influence stats created, therefore getting an epic hero will
    be hard.
* I want to be paid... 0.05 eth per hero!
* stats are randomly generated
  * stats are strength, health, intellect, magic, dexterity
  * A scale of 1 - 18
  * The stats are randomly picked and randomly determined there amplitude according to the following:
    * Stat 1 can max at 18
    * Stat 2 can max at 17
    * Stat 3 can max at 16
    * ...
* You could imagine these being an NFT
  * They are non divisable

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

### What is the size of our finished contract.

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### Did you know you can only have 24kb?
YIKES....

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### Every time your contract gets deployed again (upgrade / bug fix) address changes??
YIKES....

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### Don't worry!  There is a solution.

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### But there is a bit we have to learn to understand it
YIKES...

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

