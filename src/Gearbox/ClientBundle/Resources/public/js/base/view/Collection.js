define(['marionette','base/extensions/View'], function(Marionette) {
    return Marionette.CollectionView.extend({
        itemViewEventPrefix: 'childview'
    });
});