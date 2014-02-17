define(['base/view/Item', 'text!./Empty.html'], function(BaseView, template){

    return BaseView.extend({
        tagName: 'tr',
        template: template
    })

});