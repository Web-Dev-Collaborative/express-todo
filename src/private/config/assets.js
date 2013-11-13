module.exports = function (assets) {
    assets.root = __dirname;
    assets.addJs('../../public/js/**.js');

    assets.addCss('../../public/css/**.css');
};