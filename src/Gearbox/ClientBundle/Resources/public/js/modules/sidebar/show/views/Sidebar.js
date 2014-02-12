define(['base/view/Item', 'text!./Sidebar.html'], function(ItemView, template){
    return ItemView.extend({
        template: template
    })
});