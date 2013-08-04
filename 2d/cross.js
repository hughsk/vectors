/**

### `cross(vec, other)`

Returns the cross product of vectors `vec` and `other`:

``` javascript
var cross = require('vectors/2d/cross')
var a = [1, 2]
var b = [8, 4]

cross(a, b) === -12
```

**/

module.exports = cross

function cross(vec, other) {
  return (
    vec[0] * other[1] -
    vec[1] * other[0]
  )
}
