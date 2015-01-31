var Prospect = require('../lib/Prospect.js');
var assert = require('assert');
var CreditCard = require('../lib/CreditCard.js');
var SubscriptionPlan = require('../lib/SubscriptionPlan.js');

describe('models', function () {
    describe('prospect', function () {

        var prospect;

        beforeEach(function () {
            prospect = new Prospect();
        });

        it('should setEventually the profileId if there is a value', function () {
            prospect.withProfileId('superId');
            assert.equal(prospect.profileId, 'superId');
        });

        it('should not change the profile id if there is no value passed', function () {
            prospect.withProfileId('superId');
            assert.equal(prospect.profileId, 'superId');
            prospect.withProfileId(undefined);
            assert.equal(prospect.profileId, 'superId');
        });

        it('should chain the api', function () {
            prospect
                .withProfileId(234)
                .withBillingCity('Chiang Mai');

            assert.equal(prospect.profileId, 234);
            assert.equal(prospect.billingCity, 'Chiang Mai');
        });

        it('should chain the api even if undefined', function () {
            prospect
                .withProfileId(234)
                .withProfileId(undefined)
                .withBillingCity('Chiang Mai');

            assert.equal(prospect.profileId, 234);
            assert.equal(prospect.billingCity, 'Chiang Mai');
        });

        it('should be visitable by a gateway', function () {
            var gateway = {
                chargeCustomer: function (order, profileId, options) {
                    this.order = order;
                    this.profileId = profileId;
                    this.options = options;
                }
            };
            var ord = {prop: 'val'};
            var opt = {propy: 'valy'};
            prospect.withProfileId('superId')
                .$charge(ord, gateway, opt);

            assert.equal(gateway.order, ord);
            assert.equal(gateway.options, opt);
            assert.equal(gateway.profileId, 'superId');


        });
    });

    describe('Credit Card', function () {
        var cc;

        beforeEach(function () {
            cc = new CreditCard();
        });

        it('should setEventually the values', function () {
            cc
                .withCreditCardNumber('4111')
                .withExpirationMonth('12')
                .withExpirationYear('2014')
                .withCvv2('123');

            assert.equal(cc.creditCardNumber, '4111');
            assert.equal(cc.expirationMonth, '12');
            assert.equal(cc.expirationYear, '2014');
            assert.equal(cc.cvv2, '123');
        });
    });


    describe('Subscription Plan', function () {
        var sp;

        beforeEach(function () {
            sp = new SubscriptionPlan();
        });

        it('should setEventually the parameters', function () {
            sp
                .withStartingDate(new Date())
                .withIterationCount(4)
                .withPeriodLength(3)
                .withPeriodUnit('months')
                .withAmount(234);

            assert(sp.startingDate);
            assert.equal(sp.iterationCount, 4);
            assert.equal(sp.periodLength, 3);
            assert.equal(sp.periodUnit, 'months');
            assert.equal(sp.amount, 234);


        });
    });
});
