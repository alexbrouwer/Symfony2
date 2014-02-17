define(['marionette','base/extensions/View'], function(Marionette) {
    return Marionette.Layout.extend({
        itemViewEventPrefix: 'childview'
    });
});