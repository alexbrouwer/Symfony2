define(['base/entity/Collection', './User'], function(Collection, Item) {
    return Collection.extend({
        model: Item,

        parse: function(response) {
            return response['users'];
        }
    });
});