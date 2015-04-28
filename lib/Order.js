var setEventually = require('./func.js').setEventually;
var extend = require('util')._extend;

function Order (data) {
  extend(this, data || {});
}

Order.prototype.withAmount = setEventually('amount');

Order.prototype.withCurrency = setEventually('currency');

module.exports = Order;