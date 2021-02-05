const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

const nextSettings = {
    exportTrailingSlash: false,
    exportPathMap: function() {
        return {
            '/': { page: '/' },
        };
    },
};

// module.exports = withPlugins([[withSass(), withImages()]]);
module.exports = withPlugins([[withSass(), withImages()]]);
