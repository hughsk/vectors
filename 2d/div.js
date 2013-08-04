/**

### `div(vec, scalar)`

Divides the vector `vec` by a `scalar` value:

``` javascript
var div = require('vectors/2d/div')
var spd = [5, 5]

div(spd, 2) === [2.5, 2.5]
```

**/

module.exports = div

function div(vec, scalar) {
  vec[0] /= scalar
  vec[1] /= scalar
  return vec
}
