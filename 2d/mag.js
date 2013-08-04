/**

### `mag(vec)`

Returns the magnitude of the vector:

``` javascript
var mag = require('vectors/2d/mag')
var spd = [2, 4]

mag(spd) === 4.47213595499958
```

**/

module.exports = mag

function mag(vec) {
  return Math.sqrt(vec[0]*vec[0] + vec[1]*vec[1])
}
