define(['base/view/Item', 'text!./Panel.html'], function(BaseView, template){

    return BaseView.extend({
        template: template,

        collectionEvents: {
            "sync": "render"
        }
    })

});