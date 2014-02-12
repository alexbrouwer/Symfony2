define(['base/view/Composite', 'text!./Header.html', './Link'], function(BaseView, template, ItemView){
    return BaseView.extend({
        template: template,

        itemView: ItemView,
        itemViewContainer: 'ul'
    })
});