/**

### `heading(vec, other)`

Mutliplies the vector `vec` by a `scalar` value:

``` javascript
var heading = require('vectors/2d/heading')
var a = [5, 0]
var b = [0, 5]

heading(a, b) * 180 / Math.PI === 45 // degrees
```

**/

module.exports = heading

function heading(vec, other) {
  return Math.atan2(vec[1] - other[1], vec[0] - other[0])
}
