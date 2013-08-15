/**

# vectors

A grab bag of vector utility functions for 2D and 3D vectors that
operate on plain arrays. Much like [cog](http://ghub.io/cog),
each method can be required individually to limit the amount of
bloat you get from using the module on the client with
[browserify](http://browserify.org).

## Installation

``` bash
npm install vectors
```

## Usage

Each method is requireable from `vectors/${method}`,
e.g.:

``` javascript
var mag = require('vectors/mag')
var add = require('vectors/add')
var copy = require('vectors/copy')
```

Each method takes a `vec` vector, which if returning a new
vector will almost always do so by modifying it directly:

``` javascript
var spd = [+1, 0]
var acc = [-1, 0]
var cop = copy(spd)

mag(spd)      // 1
add(spd, acc) // spd === [0, 0]
mag(spd)      // 0
mag(cop)      // 1
```

**/

module.exports = {
    add: require('./add')
  , sub: require('./sub')
  , mag: require('./mag')
  , div: require('./div')
  , dot: require('./dot')
  , mult: require('./mult')
  , dist: require('./dist')
  , lerp: require('./lerp')
  , copy: require('./copy')
  , cross: require('./cross')
  , limit: require('./limit')
  , heading: require('./heading')
  , normalize: require('./normalize')
}