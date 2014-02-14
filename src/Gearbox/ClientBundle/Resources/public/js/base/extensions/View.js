define(['marionette', './Handlebars'], function(Marionette, Handlebars) {

    Marionette.Renderer.render = function(template, data) {
        if(template === false) {
            return false;
        }

        if(template.match('{{.*}}')) {
            template = Handlebars.compile(template);
        }

        if(typeof template == 'function') {
            return template(data);
        } else {
            return template;
        }
    };

    Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
        return Handlebars.compile(rawTemplate);
    };
});