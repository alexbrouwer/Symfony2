define(['backbone', 'base/extensions/entities'], function(Backbone){
    return Backbone.RelationalModel.extend({
        has: function(attribute) {

            var attributeExists = Backbone.RelationalModel.prototype.has.apply(this, arguments);

            if(attributeExists) {
                // Check if attribute is a HasMany relation
                var relation = this.getRelation(attribute);
                if(relation && relation instanceof Backbone.HasMany) {
                    attributeExists = this.get('children').length > 0;
                }
            }

            return attributeExists
        }
    });
});