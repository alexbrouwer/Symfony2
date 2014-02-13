define(['base/view/Layout', 'text!./Header.html', './Link'], function(BaseView, template, ItemView){
    return BaseView.extend({
        template: template,
        className: 'navbar'
    })
});