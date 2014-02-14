define(['base/entity/Model'], function(Model) {
    var Item = Model.extend({
        defaults: {
            title: '',
            icon: 'fa fa-arrow-circle-right',
            href: '#'
        },

        relations: [
            {
                type: 'HasMany',
                key: 'children',
                relatedModel: null
            }
        ]
    });

    Item.prototype.relations[0].relatedModel = Item;

    return Item;
});