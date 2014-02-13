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

        navigate: function(url, options) {
            this.history.navigate(url, options);
        },

        setConfig: function(config) {
            if(!_.isObject(config)) {
                throw new Error('Config has to be an object hash');
            }

            if(!this._config) {
                this._config = new Config({
                    history: {},
                    currentUser: {}
                });
            }

            this._config = new Config(_.extend(this._config.toJSON(), config));
        },

        getConfig: function() {
            return this._config;
        }
    });
});