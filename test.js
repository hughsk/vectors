var v = require('./')
var test = require('tape')

test('add', function(t) {
  t.plan(4)
  t.deepEqual(v.add([1, 2], [2, 1]), [3, 3])
  t.deepEqual(v.add([1, 2, 3], [3, 2, 1]), [4, 4, 4])
  t.deepEqual(v.add([1, 2, 3], [3, 2, 1], [2, 1, 2], [1, 2, 1]), [7, 7, 7])
  t.deepEqual(v.add([1, 2, 3], 5), [6, 7, 8])
})

test('copy', function(t) {
  t.plan(1)
  t.deepEqual(v.copy([1, 2]), [1, 2])
})

test('cross', function(t) {
  t.plan(2)
  t.deepEqual(v.cross([1, 2], [8, 4]), -12)
  t.deepEqual(v.cross([1, 2, 3], [8, 4, 2]), [-8, 22, -12])
})

test('dist', function(t) {
  t.plan(2)
  t.deepEqual(v.dist([2, 4], [4, 4]), 2)
  t.deepEqual(v.dist([2, 4, 4], [4, 4, 4]), 2)
})

test('div', function(t) {
  t.plan(4)
  t.deepEqual(v.div([2, 2], [2, 2]), [1, 1])
  t.deepEqual(v.div([6, 6, 6], [2, 2, 2]), [3, 3, 3])
  t.deepEqual(v.div([12, 6, 4], [2, 2, 2], [2, 2, 2]), [3, 1.5, 1])
  t.deepEqual(v.div([12, 12, 12], 6), [2, 2, 2])
})

test('dot', function(t) {
  t.plan(2)
  t.deepEqual(v.dot([15, 5], [10, 8]), 190)
  t.deepEqual(v.dot([15, 5, 5], [10, 8, 8]), 230)
})

test('heading', function(t) {
  t.plan(1)
  t.deepEqual(v.heading([5, 0], [0, 5]) * 180 / Math.PI, -45)
})

test('lerp', function(t) {
  t.plan(2)
  t.deepEqual(v.lerp([], [0, 0], [100, 100], 0.75), [75, 75])
  t.deepEqual(v.lerp([], [0, 0, 0], [100, 100, 100], 0.75), [75, 75, 75])
})

test('limit', function(t) {
  t.plan(3)
  t.deepEqual(v.limit([3, 0], 2), [2, 0])
  t.deepEqual(v.limit([3, 0, 4], 5), [3, 0, 4])
  t.deepEqual(v.limit([100, 0, 200], 10).map(function(n) { return n.toFixed(2) }), [0.33, 0, 0.67])
})

test('mag', function(t) {
  t.plan(2)
  t.deepEqual(v.mag([2, 4]).toFixed(2), 4.47)
  t.deepEqual(v.mag([2, 4, 6]).toFixed(2), 16.97)
})

test('mult', function(t) {
  t.plan(4)
  t.deepEqual(v.mult([2, 2], [2, 2]), [4, 4])
  t.deepEqual(v.mult([6, 6, 6], [2, 2, 2]), [12, 12, 12])
  t.deepEqual(v.mult([12, 6, 4], [2, 2, 2], [2, 2, 2]), [48, 24, 16])
  t.deepEqual(v.mult([12, 12, 12], 6), [72, 72, 72])
})

test('normalize', function(t) {
  t.plan(3)
  t.deepEqual(v.normalize([3, 0]), [1, 0])
  t.deepEqual(v.normalize([4, 3]), [0.8, 0.6])
  t.deepEqual(v.normalize([3, 0, 4]), [0.6, 0, 0.8])
})

test('sub', function(t) {
  t.plan(4)
  t.deepEqual(v.sub([1, 2], [2, 1]), [-1, 1])
  t.deepEqual(v.sub([1, 2, 3], [3, 2, 1]), [-2, 0, 2])
  t.deepEqual(v.sub([10, 12, 13], [3, 2, 1], [2, 1, 2], [1, 2, 1]), [4, 7, 9])
  t.deepEqual(v.sub([12, 12, 12], 5), [7, 7, 7])
})
