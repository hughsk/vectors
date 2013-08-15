/**

### `dot(vec, other)`

Returns the dot product of vectors `vec` and `other`:

``` javascript
var dot = require('vectors/dot')
var vecA = [15, 5]
var vecB = [10, 8]

dot(vecA, vecB) === 190
```

**/

module.exports = dot

function dot(vec, other) {
  var res = 0
  for (var n = 0; n < vec.length; n++) {
    res += vec[n] * other[n]
  }
  return res
}
