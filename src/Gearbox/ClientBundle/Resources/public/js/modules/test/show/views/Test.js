define(['base/view/Item', 'text!./Test.html'], function(BaseView, template){
    return BaseView.extend({
        template: template
    })
});