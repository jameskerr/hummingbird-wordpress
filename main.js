var sugar   = require('sugar');
var winston = require('winston');

/**
 * Configure logging
 */
winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {
  colorize: true,
  timestamp: function() {
    return Date.create().format('{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}.{fff}');
  }
});

// Export
module.exports = require('./lib/wordpress_service.js');
