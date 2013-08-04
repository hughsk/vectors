/**

### `add(vec, other)`

Adds the `other` vector to `vec`:

``` javascript
var add = require('vectors/2d/add')
var pos = [0, 0]
var spd = [1, 1.5]

add(pos, spd)
add(pos, spd)

console.log(pos) // [2, 3]
```

**/

module.exports = add

function add(vec, other) {
  vec[0] += other[0]
  vec[1] += other[1]
  return vec
}
