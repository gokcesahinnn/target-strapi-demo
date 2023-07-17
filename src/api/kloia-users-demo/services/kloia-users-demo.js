'use strict';

/**
 * kloia-users-demo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kloia-users-demo.kloia-users-demo');
