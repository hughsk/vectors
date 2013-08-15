/**

### `normalize(vec, scalar)`

Normalizes the vector (i.e. scales it to make its
distance 1 unit).

``` javascript
var normalize = require('vectors/normalize')

normalize([3, 0])  === [1, 0]
normalize([4, 3])  === [0.8, 0.6]
```

**/

module.exports = normalize

function normalize(vec, scalar) {
  var mag = 0
  for (var n = 0; n < vec.length; n++) {
    mag += vec[n] * vec[n]
  }
  mag = Math.sqrt(mag)

  // avoid dividing by zero
  if (mag === 0) {
    return Array.apply(null, new Array(vec.length)).map(Number.prototype.valueOf, 0)
  }

  for (var n = 0; n < vec.length; n++) {
    vec[n] /= mag
  }

  return vec
}
