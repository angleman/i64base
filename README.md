# i64Base [![NPM version](https://badge.fury.io/js/i64Base.png?branch=master)](https://npmjs.org/package/i64Base) [![Build Status](https://travis-ci.org/angleman/i64Base.png?branch=master)](https://travis-ci.org/angleman/i64Base) [![License](http://badgr.co/use/MIT.png?bg=%234ed50e)](#licensemit)


URL, Filename, AWS safe Base64 Integer Strings (BAS). Supports both fast conversions for regular integers and large integer strings (via [alan/clarke/int-encoder](http://github.com/alanclarke/int-encoder)). Assists with compression as fewer base 64 digits are needed to represent larger integers than base 10 digits. Unlike RFC-3548 Base 64 encodings, readability of BIS is improved for small integers by using an alphabet that extends base-converter in PHP and following node [base-converter](https://github.com/naholyr/node-base-converter). This is a subset of the [i64](https://github.com/angleman/i64) project and has no dependencies.

## Install

```
npm install i64
```

## Usage

```
var i64 = require('i64Base');   // initial instance
i64.int([integer])              // get/set value as Integer
i64.valueOf([int64_string])     // value as BIS, set option
i64.new(config)                 // new instance factory
```

## Examples

```
i64.int(64).valueOf()     // _         integer to BIS
i64.valueOf('c').asInt()  // 12        BIS to integer 

```



## To Do

Refactor [i64](https://github.com/angleman/i64) to extend this project.

## License: MIT