/**

### `dist(vec, other)`

Returns the distance between vectors `vec` and `other`:

``` javascript
var dist = require('vectors/dist')
var pos1 = [2, 4]
var pos2 = [4, 4]

dist(pos1, pos2) === 2
```

**/

module.exports = dist

function dist(vec, other) {
  var res = 0
  for (var n = 0; n < vec.length; n++) {
    res += Math.pow(other[n] - vec[n], 2)
  }
  return Math.sqrt(res)
}
