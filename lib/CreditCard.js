var extend = require('util')._extend;

/**
 * Model representing a credit card
 * @param  {Object} [data] - the instance will be extend with data
 * @constructor
 * @namespace
 * @property {String} this.creditCardNumber - the card number (no special character, no blank)
 * @property {String} this.expirationMonth - two string digit for the expiration month ('01'->'12')
 * @property {String} this.expirationYear - two string digit for the expiration year
 * @property {String} this.cvv - the cvv/cvv2/etc code
 */
function CreditCard(data) {
    var dataOrDefault = data || {};
    extend(this, dataOrDefault);
}

/**
 * set the credit card number of the instance
 * @method
 * @param {String} number -a string for the card number (no blank, no special character)
 * @returns {CreditCard} returns the instance
 */
CreditCard.prototype.withCreditCardNumber = function creditCardNumber(number) {
    this.creditCardNumber = number;
    return this;
};

/**
 * set the expiration month of the instance
 * @method
 * @param {string} month - a two digit string for the expiration month of the credit card
 * @returns {CreditCard} returns the instance
 */
CreditCard.prototype.withExpirationMonth = function expirationMonth(month) {
    this.expirationMonth = month;
    return this;
};

/**
 * set the expiration year of the instance
 * @method
 * @param {String} year - a two digit string for the expiration year of the credit card
 * @returns {CreditCard} returns the instance
 */
CreditCard.prototype.withExpirationYear = function expirationYear(year) {
    this.expirationYear = year;
    return this;
};

/**
 * set the cvv/cvv2/etc code of the instance
 * @method
 * @param {String | Number} cvv - a string for the cvv/cvv2/etc code
 * @returns {CreditCard} returns the instance
 */
CreditCard.prototype.withCvv = function cvv(cvv) {
    this.cvv = cvv;
    return this;
};

module.exports = CreditCard;


