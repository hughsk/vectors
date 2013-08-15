/**

### `mag(vec)`

Returns the magnitude of the vector:

``` javascript
var mag = require('vectors/mag')
var spd = [2, 4]

mag(spd) === 4.47213595499958
```

**/

module.exports = mag

function mag(vec) {
  var res = 0
  for (var n = 0; n < vec.length; n++) {
    res += Math.pow(vec[n], vec.length)
  }
  return Math.sqrt(res)
}
