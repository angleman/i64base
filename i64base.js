var util        = require('util')
;

/** ERROR TYPES **/
var i64BaseError = function (msg, constr) {
  Error.captureStackTrace(this, constr || this);
  this.message = msg || 'Error';
};
util.inherits(i64BaseError, Error);
i64BaseError.prototype.name = 'i64BaseError Error';




/** INIT CODE **/
function i64Base() {
	this._value  = '0';
}

                   //   0       8       16      24      32      40      48      56     63
                   //   v       v       v       v       v       v       v       v      v
var default_alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_';



/** INTERNAL SUPPORT FUNCTIONS **/
// based on: http://stackoverflow.com/questions/6213227/fastest-way-to-convert-a-number-to-radix-64-in-javascript
i64Base.prototype._intTo64Fast = function(number) {
	
    if (isNaN(Number(number)) || number === null || number === Number.POSITIVE_INFINITY) {
        throw new i64BaseError("Invalid _intTo64fast() Number '" + number + "'");
    }
    if (number < 0) {
        throw new i64BaseError("Invalid _intTo64fast() Negative Number '" + number + "'");
    }

    var rixit                          // like 'digit', only in some non-decimal radix 
      , result   = ''
      , residual = Math.floor(number)
      , alphabet = this._config.alphabet
    ;
    while (true) {
        rixit    = residual % 64;
        result   = alphabet.charAt(rixit) + result;
        residual = Math.floor(residual / 64);
        if (residual == 0) {
            break;
        }
    }
    return result;
}



// based on: http://stackoverflow.com/questions/6213227/fastest-way-to-convert-a-number-to-radix-64-in-javascript
i64Base.prototype._toIntFast = function(i64string) {
	if (!this.isi64Base(i64string)) {
		throw new i64BaseError("Invalid _toIntFast() Int64String: '" + i64string + "'");
	}
    var result = 0
      , alphabet = this._config.alphabet
    ;
    i64string = i64string.split('');
    for (var e in i64string) {
        result = (result * 64) + alphabet.indexOf(i64string[e]);
    }
    return result;
}






/** Main API **/

i64Base.prototype.new = function() {
	var result = new i64Base();
	return result;
}



i64Base.prototype.isi64Base = function(i64string) {
	var result = (typeof i64string == 'string') && (i64string == i64string.match(/^([\-_A-Za-z0-9+/])*/g));
	return result;
}



i64Base.prototype.valueOf = function(i64string) {
	if (typeof i64string == 'undefined') { // no parameter, return the Int64String value
		return this._value;
	} else {
		if (!this.isi64Base(i64string)) {
			throw new I64StringError("Invalid valueOf() Int64String '" + i64string + "'");
		}
		this._value = i64string;
		return this;
	}
}



i64Base.prototype.int = function(intvalue) {
	if (typeof intvalue == 'undefined') { // no parameter, return the integer value
		if (this._value.length > 4) { // large number
			return int_encoder.decode(this._value, 10);
		} else {
			return this._toIntFast(this._value);
		}
	} else { // assign the integer value
		if (typeof intvalue == 'string') {
			this._value = int_encoder.encode(intvalue, 10);
		} else {
			this._value = this._intTo64Fast(intvalue);
		}
		return this;
	}
}



i64Base.prototype.hex = function(hexvalue) {
	if (typeof hexvalue == 'undefined') { // no parameter, return the hexidecimal value
		return int_encoder.decode(this._value, 16);
	} else { // assign the hexidecimal value
		this._value = int_encoder.encode(hexvalue, 16);
		return this; 
	}
}




/** EXPORT GLOBAL INSTANCE**/
var i64GlobalInstance = new i64Base();
module.exports = i64GlobalInstance; // use i64.new() factory for individual instances
