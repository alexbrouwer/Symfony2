define(['./kernel'], function(kernel) {

    return function(name) {
        return kernel.module(name, function(mod) {
            mod.startWithParent = false;
            mod.name = name;
        });
    };
});