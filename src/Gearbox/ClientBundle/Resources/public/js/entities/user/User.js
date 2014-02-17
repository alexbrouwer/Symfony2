define(['base/entity/Model'], function(Model){
    return Model.extend({
        defaults: {
            fullName: '',
            username: ''
        }
    });
});