
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./hero-card.cjs.production.min.js')
} else {
  module.exports = require('./hero-card.cjs.development.js')
}
