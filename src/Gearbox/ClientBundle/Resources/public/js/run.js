(function(global) {

    var curl = global.curl;
    var appConfig = global.appConfig;
    var config = {
        baseUrl: 'bundles/gearboxclient/js',
        paths: {
            curl: 'lib/curl/curl',
            underscore: 'lib/lodash',
            jquery: 'lib/jquery/jquery',
            backbone: 'lib/backbone-shim',
            marionette: 'lib/backbone/backbone.marionette',
            'backbone.wreqr': 'lib/backbone/backbone.wreqr',
            'backbone.babysitter': 'lib/backbone/backbone.babysitter',
            handlebars: {
                location: 'lib/handlebars/handlebars',
                config: {
                    loader: 'curl/loader/legacy',
                    exports: 'Handlebars'
                }
            },
            when: 'lib/when',
            base: 'base',
            entities: 'entities',
            modules: 'modules'
        },
        preloads: ['underscore', 'jquery'],
        packages: [
            {name: 'app', location: 'app'}
        ]
    }, idx, packages = appConfig.packages, packageList = [], packageName;

    function forEachPackage(callback) {
        for(idx in packages) {
            if(!packages.hasOwnProperty(idx)) {
                continue;
            }

            packageName = packages[idx];
            callback.call(null, packageName, idx);
        }
    }

    forEachPackage(function(packageConfig, idx) {
        var packageName = packageConfig.name;
        config.packages.push(packageConfig);
        packageList[idx] = packageName;
    });

    curl(config, ['app']).then(success, fail);

    function success(app) {
        app.setConfig(appConfig);
        app.execute('debug', 'loading packages', packageList);
        curl(packageList).then(function() {
            app.start(app.getConfig());
        }, fail);
    }

    function fail(err) {
        console.error(err);
    }

})(this);