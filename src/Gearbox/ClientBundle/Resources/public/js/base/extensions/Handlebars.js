define(['handlebars'], function(Handlebars) {

    Handlebars.registerHelper('debug', function(value) {
        console.log(value);
    });

    return Handlebars;
});