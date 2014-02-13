define(['base/entity/Collection','./Item'], function(Collection, Item){
    return Collection.extend({
        model: Item
    });
});