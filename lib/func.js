function set(property) {
    return function (value) {
        maybe(function (val) {
            this[property] = val;
        }).call(this, value);

        return this;
    };
}

//simple one-arity maybe func
function maybe(func) {
    return function (value) {
        if (value !== undefined) {
            func.call(this, value);
        }
    }
}

module.exports = {
    "set": set
};