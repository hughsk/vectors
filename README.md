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

## 3D Vector API

Working on this one...

## 2D Vector API

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

### `copy(vec)`

Returns a copy of the vector `vec`:

``` javascript
var copy = require('vectors/2d/copy')
var spd = [5, 5]

var cop = copy(spd)
mult(spd, 100) === [100, 100]
cop === [5, 5]
```

### `cross(vec, other)`

Returns the cross product of vectors `vec` and `other`:

``` javascript
var cross = require('vectors/2d/cross')
var a = [1, 2]
var b = [8, 4]

cross(a, b) === -12
```

### `dist(vec, other)`

Returns the distance between vectors `vec` and `other`:

``` javascript
var dist = require('vectors/2d/dist')
var pos1 = [2, 4]
var pos2 = [4, 4]

dist(pos1, pos2) === 2
```

### `div(vec, scalar)`

Divides the vector `vec` by a `scalar` value:

``` javascript
var div = require('vectors/2d/div')
var spd = [5, 5]

div(spd, 2) === [2.5, 2.5]
```

### `dot(vec, other)`

Returns the dot product of vectors `vec` and `other`:

``` javascript
var dot = require('vectors/2d/dot')
var vecA = [15, 5]
var vecB = [10, 8]

dot(vecA, vecB) === 190
```

### `heading(vec, other)`

Mutliplies the vector `vec` by a `scalar` value:

``` javascript
var heading = require('vectors/2d/heading')
var a = [5, 0]
var b = [0, 5]

heading(a, b) * 180 / Math.PI === 45 // degrees
```

### `lerp(vec, start, finish, scalar)`

Set `vec` to the linear interpolation between vectors `start`
and `finish`:

``` javascript
var lerp = require('vectors/2d/lerp')
var start = [0, 0]
var finish = [100, 100]

lerp([], start, finish, 0.75) === [75, 75]
```

### `limit(vec, scalar)`

Limits the vector `vec` to a magintude of `scalar` units.

``` javascript
var limit = require('vectors/2d/limit')

limit([3, 0], 2)  === [2, 0]
limit([3, 4], 1)  === [0.6, 0.8]
limit([5, 5], 24) === [5, 5]
```

### `mag(vec)`

Returns the magnitude of the vector:

``` javascript
var mag = require('vectors/2d/mag')
var spd = [2, 4]

mag(spd) === 4.47213595499958
```

### `mult(vec, scalar)`

Mutliplies the vector `vec` by a `scalar` value:

``` javascript
var mult = require('vectors/2d/mult')
var spd = [5, 5]

mult(spd, 2) === [10, 10]
```

### `normalize(vec, scalar)`

Normalizes the vector (i.e. scales it to make its
distance 1 unit).

``` javascript
var normalize = require('vectors/2d/normalize')

normalize([3, 0])  === [1, 0]
normalize([4, 3])  === [0.8, 0.6]
```

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
