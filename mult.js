/**

### `mult(vec, other[, ...])`

Mutliplies the vector `vec` by a `other` value:

``` javascript
var mult = require('vectors/mult')
var spd = [5, 5]

mult(spd, 2) === [10, 10]
```

Or multiply multiple arrays:

``` javascript
var res = mult([2, 2, 2], [4, 4, 4])
console.log(res) // [8, 8, 8]
```

**/

module.exports = mult

function mult() {
  for (var i = 1; i < arguments.length; i++) {
    for (var n = 0; n < arguments[0].length; n++) {
      arguments[0][n] *= Array.isArray(arguments[i]) ? arguments[i][n] : arguments[i]
    }
  }
  return arguments[0]
}
