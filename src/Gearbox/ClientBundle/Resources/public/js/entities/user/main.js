define([
    'base/entity/Repository',
    './Users'
], function(Repository, Users) {

    return Repository.create({
        requests: {
            'user:entities': 'getUserEntities'
        },

        getUserEntities: function() {
            var users = new Users();
            users.url = '/api/users';
            users.fetch({reset: true});

            return users;
        }
    });

});