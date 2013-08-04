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

Each method is requireable from `vectors/${dims}d/${method}`,
e.g.:

``` javascript
var mag2d = require('vectors/2d/mag')
var add2d = require('vectors/2d/add')
var copy2d = require('vectors/2d/copy')
```

Each method takes a `vec` vector, which if returning a new
vector will almost always do so by modifying it directly:

``` javascript
var spd = [+1, 0]
var acc = [-1, 0]
var cop = copy2d(spd)

mag2d(spd)      // 1
add2d(spd, acc) // spd === [0, 0]
mag2d(spd)      // 0
mag2d(cop)      // 1
```

**/

module.exports = {
  vec2: require('./2d'),
  vec3: require('./3d')
}
