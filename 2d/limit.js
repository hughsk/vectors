/**

### `limit(vec, scalar)`

Limits the vector `vec` to a magintude of `scalar` units.

``` javascript
var limit = require('vectors/2d/limit')

limit([3, 0], 2)  === [2, 0]
limit([3, 4], 1)  === [0.6, 0.8]
limit([5, 5], 24) === [5, 5]
```

**/

module.exports = limit

function limit(vec, scalar) {
  var mag = vec[0]*vec[0] + vec[1]*vec[1]

  if (mag > scalar*scalar) {
    mag = Math.sqrt(mag)
    vec[0] = vec[0] * scalar / mag
    vec[1] = vec[1] * scalar / mag
  }

  return vec
}
