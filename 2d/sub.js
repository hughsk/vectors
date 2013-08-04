/**

### `sub(vec, other)`

Subtracts the `other` vector from `vec`:

``` javascript
var sub = require('vectors/2d/sub')
var pos = [0, 0]
var spd = [1, 1.5]

sub(pos, spd)
sub(pos, spd)

console.log(pos) // [-2, -3]
```

**/

module.exports = sub

function sub(vec, other) {
  vec[0] -= other[0]
  vec[1] -= other[1]
  return vec
}
