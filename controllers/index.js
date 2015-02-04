'use strict';

/**
 * Controller that renders our index (home) page.
 */
function index (request, response) {
  var contextData = {
    'title': 'J-Cubed Project Status Report',
    'tagline': 'J-Cubed Project Status Report'
  };
  response.render('index.html', contextData);
}

module.exports = {
  index: index
};
