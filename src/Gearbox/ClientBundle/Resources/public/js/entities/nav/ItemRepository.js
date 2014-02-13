define(['./Items', 'app'], function(Items, app) {

    return {
        all: function() {
            var currentUser = app.request('currentUser');
            return new Items([
                { name: currentUser.get('fullName'), link: '#first' },
                { name: 'second', link: '#second' },
                { name: 'third', link: '#third' }
            ]);
        }
    };

});