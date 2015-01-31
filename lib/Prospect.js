var extend = require('util')._extend;
var setEventually = require('./func.js').setEventually;

/**
 * Constructor for Prospect model
 * @param {Object} [data] - setEventually of parameters which will be merged with the created instance
 * @constructor
 * @namespace
 * @property {String} this.profileId - the customer profile Id (related to a specific payment system
 * @property {String} this.billingFirstName - the bill receiver first name
 * @property {String} this.billingLastName - the bill receiver last name
 * @property {String} this.billingEmailAddress - the bill receiver email
 * @property {String} this.billingPhone - the bill receiver phone
 * @property {String} this.billingAddress1 - the billing address
 * @property {String} this.billingAddress2 - extra billing address information
 * @property {String} this.billingCity - the billing city
 * @property {String} this.billingState - the billing state
 * @property {String} this.billingPostalCode - the billing postal code
 * @property {String} this.billingCountry - the billing country
 * @property {String} this.shippingFirstName - the shippement receiver first name
 * @property {String} this.shippingLastName - the shippement receiver first name
 * @property {String} this.shippingPhone - the shippement receiver phone
 * @property {String} this.shippingAddress1 - the shipping address
 * @property {String} this.shippingAddress2 - extra shipping address information
 * @property {String} this.shippingCity - the shipping city
 * @property {String} this.shippingState - the shipping state
 * @property {String} this.shippingPostalCode - the shipping postal code
 * @property {String} this.shippingCountry - the shipping country
 */

function Prospect(data) {
  var dataOrDefault = data || {};
  extend(this, dataOrDefault);
}

Prospect.prototype.withProfileId = setEventually('profileId');

/**
 * setEventually the bill receiver first name
 * @method
 * @param {String} name - the customer first name
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withBillingFirstName = setEventually('billingFirstName');

/**
 * setEventually the bill receiver last name
 * @method
 * @param {String} name - the customer last name
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withBillingLastName = setEventually('billingLastName');

/**
 * setEventually the bill receiver email address
 * @method
 * @param {String} email - the bill receiver email
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withBillingEmailAddress = setEventually('billingEmailAddress');

/**
 * setEventually the bill receiver phone
 * @method
 * @param {String} phone - the bill receiver phone
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withBillingPhone = setEventually('billingPhone');

/**
 * setEventually the billing address
 * @method
 * @param {String} address - the billing address
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withBillingAddress1 = setEventually('billingAddress1');

/**
 * setEventually the billing address
 * @method
 * @param {String} address - the billing address
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withBillingAddress2 = setEventually('billingAddress2');

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
 * setEventually the shippement receiver first name
 * @method
 * @param {String} name - the shippement receiver first name
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withShippingFirstName = setEventually('shippingFirstName');

/**
 * setEventually the shippement receiver last name
 * @method
 * @param {String} name - the shippement receiver last name
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withShippingLastName = setEventually('shippingLastName');

/**
 * setEventually the shippement receiver phone
 * @method
 * @param {String} phone - the shippement receiver phone
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withShippingPhone = setEventually('shippingPhone');

/**
 * setEventually the shipping address
 * @method
 * @param {String} address - the shipping address
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withShippingAddress1 = setEventually('shippingAddress1');

/**
 * setEventually the shipping address
 * @method
 * @param {String} address - the shipping address
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withShippingAddress2 = setEventually('shippingAddress2');

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
Prospect.prototype.withBillingPostalCode = setEventually('billingPostalCode');

/**
 * set eventually the shipping zip code
 * @method
 * @params {String} zip - the zip code to set
 * @returns {Prospect} the instance
 */
Prospect.prototype.withShippingPostalCode = setEventually('shippingPostalCode');

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


