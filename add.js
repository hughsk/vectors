/**

### `add(vec, other[, ...])`

Adds the `other` vector to `vec`:

``` javascript
var add = require('vectors/add')
var pos = [0, 0]
var spd = [1, 1.5]

add(pos, spd)
add(pos, spd)

console.log(pos) // [2, 3]
```

Or add a scalar to the entire array:

``` javascript
var res = add([1, 1, 1], 6)
console.log(res) // [7, 7, 7]
```

**/

module.exports = add

function add() {
  for (var i = 1; i < arguments.length; i++) {
    for (var n = 0; n < arguments[0].length; n++) {
      arguments[0][n] += Array.isArray(arguments[i]) ? arguments[i][n] : arguments[i]
    }
  }
  return arguments[0]
}
