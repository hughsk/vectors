/**

### `lerp(vec, start, finish, scalar)`

Set `vec` to the linear interpolation between vectors `start`
and `finish`:

``` javascript
var lerp = require('vectors/2d/lerp')
var start = [0, 0]
var finish = [100, 100]

lerp([], start, finish, 0.75) === [75, 75]
```

**/

module.exports = lerp

function lerp(vec, a, b, scalar) {
  vec[0] = a[0] + (b[0] - a[0]) * scalar
  vec[1] = a[1] + (b[1] - a[1]) * scalar
  return vec
}
