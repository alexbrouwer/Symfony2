define([
    'base/view/Composite',
    'text!./Sidebar.html',
    './NavItem'
], function(BaseView, template, ItemView) {

    return BaseView.extend({
        template: template,
        className: 'navbar',

        itemViewContainer: '.nav--menu',
        itemView: ItemView,
        itemViewOptions: function(model) {
            return {
                collection: model.get('children')
            };
        },

        itemEvents: {
            'nav:opened': 'closeSiblings'
        },

        closeSiblings: function(eventName, openedView, options) {
            this.children.each(function(child){
                if(child !== openedView) {
                    child.closeNav();
                }
            });
        }
    })
});