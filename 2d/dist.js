/**

### `dist(vec, other)`

Returns the distance between vectors `vec` and `other`:

``` javascript
var dist = require('vectors/2d/dist')
var pos1 = [2, 4]
var pos2 = [4, 4]

dist(pos1, pos2) === 2
```

**/

module.exports = dist

function dist(vec, other) {
  var x = other[0] - vec[0]
  var y = other[1] - vec[1]
  return Math.sqrt(x*x + y*y)
}
