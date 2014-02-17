define(['base/view/Item', 'text!./User.html'], function(BaseView, template){

    return BaseView.extend({
        tagName: 'tr',
        template: template
    })

});