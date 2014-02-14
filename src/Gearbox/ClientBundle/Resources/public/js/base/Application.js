define([
    'marionette',
    './history',
    './entity/Model',
    'underscore'
], function(Marionette, history, Model, _) {

    var Config = Model.extend({
        defaults: {
            title: 'Gearbox'
        }
    });

    return Marionette.Application.extend({
        history: history,

        navigate: function(route, options) {
            if(route.charAt(0) == '/') {
                route = '#' + route;
            }
            this.history.navigate(route, options);
        },

        getCurrentRoute: function() {
            var frag = this.history.fragment;
            if(_.isEmpty(frag)) {
                return null;
            } else {
                return frag;
            }
        },

        startHistory: function() {
            if(this.history) {
                var options = this.getConfig().get('history');
                this.history.start(options);
            }
        },

        setConfig: function(config) {
            if(!_.isObject(config)) {
                throw new Error('Config has to be an object hash');
            }

            this.getConfig().set(config);
        },

        getConfig: function() {
            if(!this._config) {
                this._config = new Config({
                    currentUser: {}
                });
            }
            return this._config;
        }
    });
});