var extend = require('util')._extend;
var setEventually = require('./func.js').setEventually;

/**
 * Constructor for Prospect model
 * @param {Object} [data] - setEventually of parameters which will be merged with the created instance
 * @constructor
 * @namespace
 * @property {String} this.profileId - the customer profile Id (related to a specific payment system
 * @property {String} this.customerFirstName - the customer (billed to) first name
 * @property {String} this.customerLastName - the customer (billed to) last name
 * @property {String} this.customerEmail - the customer (billed to) email
 * @property {String} this.billingAddress - the billing address
 * @property {String} this.billingCity - the billing city
 * @property {String} this.billingState - the billing state
 * @property {String} this.billingCountry - the billing country
 * @property {String} this.shippingFirstName - the customer (billed to) first name
 * @property {String} this.shippingLastName - the customer (billed to) first name
 * @property {String} this.shippingAddress - the shipping address
 * @property {String} this.shippingCity - the shipping city
 * @property {String} this.shippingState - the shipping state
 * @property {String} this.shippingCountry - the shipping country
 */
function Prospect(data) {
  var dataOrDefault = data || {};
  extend(this, dataOrDefault);
}


Prospect.prototype.withProfileId = setEventually('profileId');

/**
 * setEventually the customer first name
 * @method
 * @param {String} name - the customer first name
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withCustomerFirstName = setEventually('customerFirstName');

/**
 * setEventually the customer last name
 * @method
 * @param {String} name - the customer last name
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withCustomerLastName = setEventually('customerLastName');

/**
 * setEventually the customer email address
 * @method
 * @param {String} email - the customer email
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withCustomerEmail = setEventually('customerEmail');

/**
 * setEventually the billing address
 * @method
 * @param {String} address - the billing address
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withBillingAddress = setEventually('billingAddress');

/**
 * setEventually the billing city
 * @method
 * @param {String} city - the billing city
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withBillingCity = setEventually('billingCity');

/**
 * setEventually the billing state
 * @method
 * @param {String} state - the billing state
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withBillingState = setEventually('billingState');

/**
 * setEventually the billing country
 * @method
 * @param {String} country - the billing country
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withBillingCountry = setEventually('billingCountry');

/**
 * setEventually the shipping first name
 * @method
 * @param {String} name - the shipping first name
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withShippingFirstName = setEventually('shippingFirstName');

/**
 * setEventually the shipping last name
 * @method
 * @param {String} name - the shipping last name
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withShippingLastName = setEventually('shippingLastName');

/**
 * setEventually the shipping address
 * @method
 * @param {String} address - the shipping address
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withShippingAddress = setEventually('shippingAddress');

/**
 * setEventually the shipping city
 * @method
 * @param {String} city - the shipping city
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withShippingCity = setEventually('shippingCity');

/**
 * setEventually the shipping state
 * @method
 * @param {String} state - the shipping state
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withShippingState = setEventually('shippingState');

/**
 * setEventually the shipping country
 * @method
 * @param {String} country - the shipping country
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withShippingCountry = setEventually('shippingCountry');

/**
 * set eventually the billing zip code
 * @method
 * @params {String} zip - the zip code to set
 * @returns {Prospect} the instance
 */
Prospect.prototype.withBillingZip = setEventually('billingZip');

/**
 * set eventually the shipping zip code
 * @method
 * @params {String} zip - the zip code to set
 * @returns {Prospect} the instance
 */
Prospect.prototype.withShippingZip = setEventually('shippingZip');

/**
 * charge a customer using a specific gateway assuming its profileId refers to a record in the gateway system.
 * This is an simple implementation of the visitor design pattern (the visitor being the gateway)
 * @param {Object} order - the order for the transaction
 * @param {BaseGateway} gateway - the gateway to use
 * @param {Object} option - optional field
 * @returns {Promise} - cf BaseGateway#chargeCustomer
 */
Prospect.prototype.$charge = function (order, gateway, option) {
  return gateway.chargeCustomer(order, this.profileId, option);
};

module.exports = Prospect;


