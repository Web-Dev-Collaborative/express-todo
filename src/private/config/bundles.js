var BundleUp = require('bundle-up');
var settings = require('./settings');

module.exports = function(express, app){
    BundleUp(app, settings.paths.config + '/assets', {
        staticRoot: settings.paths.public,
        staticUrlRoot:'/',
        bundle: false,
        minifyCss: false,
        minifyJs: false
    });
    
    app.use(express.static(settings.paths.public));
};