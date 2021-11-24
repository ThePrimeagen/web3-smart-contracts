---
path: "/solidity-numbers-recap"
title: "Numbers Recap"
order: "21A"
section: "Solidity Fundamentals"
description: "Learning the fundamentals of the language"
icon: "dumpster-fire"
---

### Numbers
They act like any other language.

```
uint foo = 5
foo++ // foo = 6 after op
```

```
uint foo = 5
uint bar = 7
if (foo > bar) {
    ... will not execute ...
} else {
    ... this will execute ...
}
```

```
uint foo = 5
if (foo & 0x4 == 0x4) {
    ... this will execute ...
} else {
    ... will not execute ...
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

### Deploying and reading
you read from `view` / `pure` functions.  You cannot read from a transaction
because the time it takes is unknown.  This is because ethereum is eventually
consistent.  How long is eventually?

### The language you are using to interact with is important
Return value of numbers depends on the languages capabilities

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

