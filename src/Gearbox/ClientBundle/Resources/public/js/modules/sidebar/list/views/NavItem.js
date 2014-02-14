define([
    'base/view/Composite',
    'text!./NavItem.html'
], function(BaseView, template) {
    return BaseView.extend({
        tagName: 'li',
        template: template,
        itemViewContainer: '.nav',

        events: {
            'click [data-toggle]': 'toggleNav'
        },

        itemViewOptions: function(model) {
            return {
                collection: model.get('children')
            };
        },

        itemEvents: {
            'nav:opened': 'closeSiblings'
        },

        closeSiblings: function(eventName, openedView, options) {
            this.children.each(function(child) {
                if(child !== openedView) {
                    child.closeNav();
                }
            });
        },

        toggleNav: function(e) {
            e.stopPropagation();

            if(this.isOpen()) {
                this.closeNav();
            } else {
                this.openNav();
            }
        },

        isOpen: function() {
            return this.$el.hasClass('is-open');
        },

        openNav: function() {
            this.triggerMethod('nav:open');
            if(this.model.has('children')) {
                this.$el.addClass('is-open');
            }
            this.triggerMethod('nav:opened');
        },

        closeNav: function() {
            if(this.model.has('children')) {
                this.triggerMethod('nav:close');
                this.$el.removeClass('is-open');
                this.triggerMethod('nav:closed');
            }
        },

        /**
         * When closing ourselves, close any children
         */
        onNavClose: function() {
            // Close all children if we are open
            if(this.isOpen()) {
                this.children.each(function(child) {
                    child.closeNav();
                });
            }
        }
    });
});