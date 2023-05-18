module.exports = {
    loopItemFromArrToObj: function (data) {
        return data.map(value => value.toObject());
    },
    itemObject: function (data) {
        return data ? data.toObject(): data;
    },
};