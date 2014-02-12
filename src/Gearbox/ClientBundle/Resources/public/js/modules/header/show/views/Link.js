define(['base/view/Item', 'text!./Link.html'], function(BaseView, template){
    return BaseView.extend({
        template: template,
        tagName: 'li'
    })
});