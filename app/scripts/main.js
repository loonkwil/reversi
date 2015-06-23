'use strict';

// CSS
require('normalize-css/normalize.css');
require('base.less/dist/css/base.css');
require('../styles/main.css');
require('../styles/header.css');
require('../styles/board.css');

// JS
require('babel/polyfill');

require([ 'react', './components/ReversiApp' ], function(React, ReversiApp) {
    React.render(
        React.createElement(ReversiApp, { size: 8 }),
        document.body
    );
});