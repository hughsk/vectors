/**

### `dot(vec, other)`

Returns the dot product of vectors `vec` and `other`:

``` javascript
var dot = require('vectors/2d/dot')
var vecA = [15, 5]
var vecB = [10, 8]

dot(vecA, vecB) === 190
```

**/

module.exports = dot

function dot(vec, other) {
  return vec[0] * other[0] + vec[1] * other[1]
}
