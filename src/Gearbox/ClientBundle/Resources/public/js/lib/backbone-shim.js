define([
    'underscore',
    'jquery',
    'js!lib/backbone/backbone.js!order!exports=Backbone',
    'js!lib/backbone/backbone.relational.js!order!exports=Backbone.RelationalModel'
], function(_, $, Backbone){

    Backbone.noConflict();

    return Backbone;

});