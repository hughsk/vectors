/**

### `div(vec, other[, ...])`

Divides the vector `vec` by a `other` value:

``` javascript
var div = require('vectors/div')
var spd = [5, 5]

div(spd, 2) === [2.5, 2.5]
```

Or divide multiple arrays from each other:

``` javascript
var res = div([6, 6, 6], [2, 2, 2])
console.log(res) // [3, 3, 3]
```

**/

module.exports = div

function div() {
  for (var i = 1; i < arguments.length; i++) {
    for (var n = 0; n < arguments[0].length; n++) {
      arguments[0][n] /= Array.isArray(arguments[i]) ? arguments[i][n] : arguments[i]
    }
  }
  return arguments[0]
}
