var extend = require('util')._extend;
var set = require('./func.js').set;

/**
 * model for subscription plan
 * @param {Object} [options] - the instance will be extended with options
 * @constructor
 * @namespace
 * @property {Date | String} this.startingDate - a date object or string which would result in valid Javascript date with new Date, the starting date of the subscription plan
 * @property {String | Number} this.iterationCount - the number of occurrences of the recurring payment (after the trial period)
 * @property {String} this.periodUnit - the base unit to calculate interval period - ['months', 'weeks', 'days'
 * @property {String | Number} this.periodLength - the number of base unit to get the interval period
 * @property {String | Number} this.amount - the amount to bill on every recurring payment (after the trial period)
 * @property {String | Number} this.trialCount - the number of occurrences during the trial period
 * @property {String | Number} this.trialAmount - the fee to charge on every payment during the trial period
 */
function SubscriptionPlan(options) {
    extend(this, options);
}

/**
 * set the starting date for the recurring payment
 * @method
 * @param {Date | String} date - a javascript date or a string resulting to a valid Javascript Date when called with new Date()
 * @returns {SubscriptionPlan} - returns the instance
 */
SubscriptionPlan.prototype.withStartingDate = set('startingDate');

/**
 * set the number of payments to be done within the plan duration
 * @method
 * @param {String | Number} count - the number of payments to be done within the plan duration
 * @returns {SubscriptionPlan} returns the instance
 */
SubscriptionPlan.prototype.withIterationCount = set('iterationCount');

/**
 * set the interval time unit
 * @method
 * @param {String} unit - interval unit ['months', 'days', 'weeks']
 * @returns {SubscriptionPlan} returns the instance
 */
SubscriptionPlan.prototype.withPeriodUnit = set('periodUnit');

/**
 * set the interval time value to be associated with the interval time unit
 * @param {Number} periodLength - an integer
 * @returns {SubscriptionPlan} returns the instance
 */
SubscriptionPlan.prototype.withPeriodLength = set('periodLength');

/**
 * set the amount the be billed for each payment
 * @param {String | Number} amount - the amount
 * @returns {SubscriptionPlan} returns the instance
 */
SubscriptionPlan.prototype.withAmount = set('amount');

/**
 * set the trial occurrences count
 * @param {String | Number } trialCount - trial occurrences count
 * @returns {SubscriptionPlan} returns the instance
 */
SubscriptionPlan.prototype.withTrialCount = set('trialCount');

/**
 * set the trial amount
 * @param {String | Number } trialAmount - trial amount
 * @returns {SubscriptionPlan} returns the instance
 */
SubscriptionPlan.prototype.withTrialAmount = set('trialAmount');


module.exports = SubscriptionPlan;