var extend = require('util')._extend;

/**
 * Constructor for Prospect model
 * @param {Object} [data] - set of parameters which will be merged with the created instance
 * @constructor
 * @namespace
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

/**
 * set the customer first name
 * @method
 * @param {String} name - the customer first name
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withCustomerFirstName = function customerFirstName(name) {
    this.customerFirstName = name;
    return this;
};

/**
 * set the customer last name
 * @method
 * @param {String} name - the customer last name
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withCustomerLastName = function customerLastName(name) {
    this.customerLastName = name;
    return this;
};

/**
 * set the customer email address
 * @method
 * @param {String} email - the customer email
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withCustomerEmail = function customerEmail(email) {
    this.customerEmail = email;
    return this;
};

/**
 * set the billing address
 * @method
 * @param {String} address - the billing address
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withBillingAddress = function billingAddress(address) {
    this.billingAddress = address;
    return this;
};

/**
 * set the billing city
 * @method
 * @param {String} city - the billing city
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withBillingCity = function billingCity(city) {
    this.billingCity = city;
    return this;
};

/**
 * set the billing state
 * @method
 * @param {String} state - the billing state
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withBillingState = function billingState(state) {
    this.billingState = state;
    return this;
};

/**
 * set the billing country
 * @method
 * @param {String} country - the billing country
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withBillingCountry = function billingCountry(country) {
    this.billingCountry = country;
    return this;
};

/**
 * set the shipping first name
 * @method
 * @param {String} name - the shipping first name
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withShippingFirstName = function shippingFirstName(name) {
    this.shippingFirstName = name;
    return this;
};

/**
 * set the shipping last name
 * @method
 * @param {String} name - the shipping last name
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withShippingLastName = function shippingLastName(name) {
    this.shippingLastName = name;
    return this;
};

/**
 * set the shipping address
 * @method
 * @param {String} address - the shipping address
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withShippingAddress = function shippingAddress(address) {
    this.shippingAddress = address;
    return this;
};

/**
 * set the shipping city
 * @method
 * @param {String} city - the shipping city
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withShippingCity = function shippingCity(city) {
    this.shippingCity = city;
    return this;
};

/**
 * set the shipping state
 * @method
 * @param {String} state - the shipping state
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withShippingState = function shippingState(state) {
    this.shippingState = state;
    return this;
};

/**
 * set the shipping country
 * @method
 * @param {String} country - the shipping country
 * @returns {Prospect} returns the instance
 */
Prospect.prototype.withShippingCountry = function shippingCountry(country) {
    this.shippingCountry = country;
    return this;
};


module.exports = Prospect;


