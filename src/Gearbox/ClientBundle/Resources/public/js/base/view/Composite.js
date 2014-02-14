define(['marionette','base/extensions/View'], function(Marionette) {
    return Marionette.CompositeView.extend({
        itemViewEventPrefix: 'childview'
    });
});