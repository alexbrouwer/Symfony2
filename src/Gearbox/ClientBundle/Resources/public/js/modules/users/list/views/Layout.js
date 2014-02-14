define(['base/view/Layout', 'text!./Layout.html'], function(BaseView, template){

    return BaseView.extend({
        template: template,

        regions: {
            panelRegion: '[data-region="panel"]',
            usersRegion: '[data-region="users"]'
        }
    })

});