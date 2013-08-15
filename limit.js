/**

### `limit(vec, scalar)`

Limits the vector `vec` to a magintude of `scalar` units.

``` javascript
var limit = require('vectors/limit')

limit([3, 0], 2)  === [2, 0]
limit([3, 4], 1)  === [0.6, 0.8]
limit([5, 5], 24) === [5, 5]
```

**/

module.exports = limit

function limit(vec, scalar) {
  var mag = 0
  for (var n = 0; n < vec.length; n++) {
    mag += Math.pow(vec[n], vec.length)
  }

  if (mag > Math.pow(scalar, vec.length)) {
    mag = Math.sqrt(mag)
    for (var n = 0; n < vec.length; n++) {
      vec[n] = vec[n] * scalar / mag
    }
  }

  return vec
}
