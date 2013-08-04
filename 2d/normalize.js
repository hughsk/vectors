/**

### `normalize(vec, scalar)`

Normalizes the vector (i.e. scales it to make its
distance 1 unit).

``` javascript
var normalize = require('vectors/2d/normalize')

normalize([3, 0])  === [1, 0]
normalize([4, 3])  === [0.8, 0.6]
```

**/

module.exports = normalize

function normalize(vec, scalar) {
  var mag = Math.sqrt(vec[0]*vec[0] + vec[1]*vec[1])

  vec[0] /= mag
  vec[1] /= mag

  return vec
}
