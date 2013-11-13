var BundleUp = require('bundle-up');
var settings = require('./settings');

module.exports = function(express, app){
    BundleUp(app, settings.config + '/assets', {
        staticRoot: settings.public,
        staticUrlRoot:'/',
        bundle: false,
        minifyCss: false,
        minifyJs: false
    });
    
    app.use(express.static(settings.public));
};