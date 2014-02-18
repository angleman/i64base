# TOC
   - [_intTo64Fast()](#_intto64fast)
     - [no arguments](#_intto64fast-no-arguments)
     - [negative number](#_intto64fast-negative-number)
     - [valid integer](#_intto64fast-valid-integer)
   - [_toIntFast()](#_tointfast)
     - [no arguments](#_tointfast-no-arguments)
     - [non base64 string passed](#_tointfast-non-base64-string-passed)
     - [base64 string passed](#_tointfast-base64-string-passed)
   - [int()](#int)
     - [no arguments](#int-no-arguments)
     - [small integer](#int-small-integer)
   - [isI64()](#isi64)
     - [no arguments](#isi64-no-arguments)
     - [non base64 string](#isi64-non-base64-string)
     - [integer passed](#isi64-integer-passed)
     - [base64 encoded string](#isi64-base64-encoded-string)
     - [base64 string](#isi64-base64-string)
     - [base64 string with underscore](#isi64-base64-string-with-underscore)
     - [base64 string with dash](#isi64-base64-string-with-dash)
   - [valueOf()](#valueof)
     - [no arguments](#valueof-no-arguments)
     - [argument passed](#valueof-argument-passed)
<a name=""></a>
 
<a name="_intto64fast"></a>
# _intTo64Fast()
<a name="_intto64fast-no-arguments"></a>
## no arguments
throws exception.

```js
var failed = false;
try {
    var result = a64._intTo64Fast();
} catch(err) {
    failed = true;
}
failed.should.equal(true);
```

<a name="_intto64fast-negative-number"></a>
## negative number
throws exception.

```js
var failed = false;
try {
    var result = a64._intTo64Fast(-22);
} catch(err) {
    failed = true;
}
failed.should.equal(true);
```

<a name="_intto64fast-valid-integer"></a>
## valid integer
returns "cR".

```js
var result = a64._intTo64Fast(821);
result.should.equal('cR');
```

<a name="_tointfast"></a>
# _toIntFast()
<a name="_tointfast-no-arguments"></a>
## no arguments
throws exception.

```js
var failed = false;
try {
    var result = a64._toIntFast();
} catch(err) {
    failed = true;
}
failed.should.equal(true);
```

<a name="_tointfast-non-base64-string-passed"></a>
## non base64 string passed
throws exception.

```js
var failed = false;
try {
    var result = a64._toIntFast(-22);
} catch(err) {
    failed = true;
}
failed.should.equal(true);
```

<a name="_tointfast-base64-string-passed"></a>
## base64 string passed
returns 821.

```js
var result = a64._toIntFast('cR');
result.should.equal(821);
```

<a name="int"></a>
# int()
<a name="int-no-arguments"></a>
## no arguments
returns 0.

```js
var result = a64.int();
should.exist(result);
result.should.equal(0);
```

<a name="int-small-integer"></a>
## small integer
returns "mGW".

```js
result = a64.int(92858);
should.exist(result);
result.should.equal('mGW');
```

returns "92858".

```js
result = a64.int();
should.exist(result);
result.should.equal(92858);
```

<a name="isi64"></a>
# isI64()
<a name="isi64-no-arguments"></a>
## no arguments
returns false.

```js
var result = a64.isI64();
should.exist(result);
result.should.equal(false);
```

<a name="isi64-non-base64-string"></a>
## non base64 string
returns false.

```js
var result = a64.isI64('hi mom');
should.exist(result);
result.should.equal(false);
```

<a name="isi64-integer-passed"></a>
## integer passed
returns false.

```js
var result = a64.isI64(15);
should.exist(result);
result.should.equal(false);
```

<a name="isi64-base64-encoded-string"></a>
## base64 encoded string
returns false.

```js
var result = a64.isI64('AAA==');
should.exist(result);
result.should.equal(false);
```

<a name="isi64-base64-string"></a>
## base64 string
returns true.

```js
var result = a64.isI64('Z3');
should.exist(result);
result.should.equal(true);
```

<a name="isi64-base64-string-with-underscore"></a>
## base64 string with underscore
returns true.

```js
var result = a64.isI64('3_');
should.exist(result);
result.should.equal(true);
```

<a name="isi64-base64-string-with-dash"></a>
## base64 string with dash
returns true.

```js
var result = a64.isI64('-G');
should.exist(result);
result.should.equal(true);
```

<a name="valueof"></a>
# valueOf()
<a name="valueof-no-arguments"></a>
## no arguments
returns "0".

```js
var result = a64.valueOf();
should.exist(result);
result.should.equal('0');
```

<a name="valueof-argument-passed"></a>
## argument passed
returns "this" and G5f2.

```js
result = a64.valueOf('G5f2');
should.exist(result);
result = a64.valueOf('G5f2').valueOf();
result.should.equal('G5f2');
```

