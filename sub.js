/**

### `sub(vec, other[, ...])`

Subtracts the `other` vector from `vec`:

``` javascript
var sub = require('vectors/sub')
var pos = [0, 0]
var spd = [1, 1.5]

sub(pos, spd)
sub(pos, spd)

console.log(pos) // [-2, -3]
```

Or subtract a scalar from the entire array:

``` javascript
var res = sub([9, 8, 7], 6)
console.log(res) // [3, 2, 1]
```

**/

module.exports = sub

function sub() {
  for (var i = 1; i < arguments.length; i++) {
    for (var n = 0; n < arguments[0].length; n++) {
      arguments[0][n] -= Array.isArray(arguments[i]) ? arguments[i][n] : arguments[i]
    }
  }
  return arguments[0]
}
