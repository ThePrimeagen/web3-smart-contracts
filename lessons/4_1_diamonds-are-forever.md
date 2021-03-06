---
path: "/diamond-are-forever"
title: "Diamonds Are Forever"
order: "400A"
section: "Solidity 201"
description: "Learning how the storage works."
icon: "dumpster-fire"
---

### There are ways around size issue.
* We could hack our "own" solution by passing around contract addresses.
* We could use a well established pattern.

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />


### Diamond Pattern
* Your contract is too big.
* You will have to update your contract at some point.

#### EIP-2535 (Ethereum Improvement Proposal)
From the site

##### Motivation
1. A single address for unlimited contract functionality. Using a single
   address for contract functionality makes deployment, testing and integration
   with other smart contracts, software and user interfaces easier.
1. Your contract exceeds the 24KB maximum contract size. You may have related
   functionality that it makes sense to keep in a single contract, or at a
   single contract address. A diamond does not have a max contract size.
1. A diamond provides a way to organize contract code and data. You may want to
   build a contract system with a lot of functionality. A diamond provides a
   systematic way to isolate different functionality and connect them together
   and share data between them as needed in a gas-efficient way.
1. A diamond provides a way to upgrade functionality. Upgradeable diamonds can
   be upgraded to add/replace/remove functionality. Because diamonds have no
   max contract size, there is no limit to the amount of functionality that can
   be added to diamonds over time. Diamonds can be upgradeable or immutable. It
   is also possible to make an upgradeable diamond and then at a later time
   remove its upgrade capability.

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### My perspective on knowing everything
* I have written http, http2, and web socket algorithms.  I don't know tcp.

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

#### But before we go forward! Quick White board to explain diamonds!

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### Three Foundational Materials required for basic Diamond Understanding
* By understanding the first two, you will know how the diamond pattern works.
* By understanding the third one, you will prevent a whole class of bugs that
  will dominate your contract.

#### Fallbacks
#### Delegate calls
#### Storage / Layout
You can understand the diamond pattern, but probably not create it easily.

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### This is my favorite part
Live coding and cool things

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

