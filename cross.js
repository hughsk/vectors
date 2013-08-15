/**

### `cross(vec, other)`

Returns the cross product of vectors `vec` and `other`:

``` javascript
var cross = require('vectors/cross')
var a = [1, 2]
var b = [8, 4]

cross(a, b) === -12
```

**/

module.exports = cross

function cross(vec, other) {
  if (vec.length === 2) {
    return (
      vec[0] * other[1] -
      vec[1] * other[0]
    )
  } else if (vec.length === 3) {
    return [
      (vec[1] * other[2]) - (vec[2] * other[1]),
      (vec[2] * other[0]) - (vec[0] * other[2]),
      (vec[0] * other[1]) - (vec[1] * other[0])
    ]
  }
}
