/**

### `lerp(vec, start, finish, scalar)`

Set `vec` to the linear interpolation between vectors `start`
and `finish`:

``` javascript
var lerp = require('vectors/lerp')
var start = [0, 0]
var finish = [100, 100]

lerp([], start, finish, 0.75) === [75, 75]
```

**/

module.exports = lerp

function lerp(vec, a, b, scalar) {
  for (var n = 0; n < a.length; n++) {
    vec[n] = a[n] + (b[n] - a[n]) * scalar
  }
  return vec
}
