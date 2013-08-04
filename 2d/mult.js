/**

### `mult(vec, scalar)`

Mutliplies the vector `vec` by a `scalar` value:

``` javascript
var mult = require('vectors/2d/mult')
var spd = [5, 5]

mult(spd, 2) === [10, 10]
```

**/

module.exports = mult

function mult(vec, scalar) {
  vec[0] *= scalar
  vec[1] *= scalar
  return vec
}
