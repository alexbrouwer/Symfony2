define(['base/view/Composite', 'text!./Users.html','./User', './Empty'], function(BaseView, template, ItemView, EmptyView){

    return BaseView.extend({
        template: template,
        itemView: ItemView,
        emptyView: EmptyView,
        itemViewContainer: 'tbody'
    })

});