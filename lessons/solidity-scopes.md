---
path: "/solidity-scopes"
title: "Scopes"
order: "30A"
section: "Solidity Fundamentals"
description: "Learning the fundamentals of the language"
icon: "dumpster-fire"
---

### Lets talk about scopes
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

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
