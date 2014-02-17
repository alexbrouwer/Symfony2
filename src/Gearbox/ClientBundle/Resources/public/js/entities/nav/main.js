define(['base/entity/Repository', './Items'], function(Repository, Items) {

    return Repository.create({
        requests: {
            'nav:entities': 'all'
        },

        all: function() {
            return new Items([
                {
                    title: 'Users',
                    href: '/users'
                },
                {
                    title: 'Test',
                    href: '/test'
                },
                {
                    title: 'Item 3',
                    children: [
                        {
                            title: 'Item 3.1'
                        },
                        {
                            title: 'Item 3.2'
                        }
                    ]
                }
            ], {parse: true});
        }
    });
});