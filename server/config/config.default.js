'use strict';

/**
 * Module Dependencies
 */

var pkg               = require('../../package.json');

/**
 * Private
 */
var secret = 'changeme';
var email = 'test@example.com';
var name = 'Super Man';

/**
 * Configuration
 */

var config            = {};

// From package.json
config.name           = pkg.name;
config.version        = pkg.version;
config.description    = pkg.description;
config.company        = pkg.company;
config.author         = pkg.author;
config.keywords       = pkg.keywords;
config.nodeVersion    = pkg.engines.node;

/**
 * Port and host
 */

config.port           = process.env.PORT;
config.host           = '127.0.0.1';

/**
 * Database Configuration
 */

// Mongo
config.mongodb        = {};



// Redis
config.redis          = {};
config.redis.enabled  =  true;
config.redis.host     =  process.env.REDIS_HOST || '';
config.redis.port     =  process.env.REDIS_PORT || '6379';
config.redis.password =  process.env.REDIS_PASSWORD || '';

/**
 * Cookie Configuration
 */

config.cookieSecret          = process.env.COOKIE_SECRET || secret;

/**
 * Session Configuration
 */

var hour              = 3600000;
var day               = (hour * 24);
var week              = (day * 7);

// Session
config.session                 = {};
config.session.secret          = process.env.SESSION_SECRET || secret;
config.session.name            = 'sid';  
config.session.proxy           = false;  // Trust the reverse proxy for HTTPS/SSL
config.session.resave          = false;  // Forces session to be saved even when unmodified
config.session.saveUninitialized = false; // forces a session that is "uninitialized" to be saved to the store
config.session.cookie          = {};
config.session.cookie.httpOnly = true;   // Reduce XSS attack vector
config.session.cookie.secure   = false;  // Cookies via HTTPS/SSL
config.session.cookie.maxAge   = process.env.SESSION_MAX_AGE || week;

/**
 * Mailing Configuration
 */

config.smtp                    = {};
config.smtp.name               = process.env.SMTP_FROM_NAME || name;
config.smtp.address            = process.env.SMTP_FROM_ADDRESS || email;

module.exports = config;

