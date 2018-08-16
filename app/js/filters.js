angular.module('phonecatFilters', []).
  filter('checkMark', function () {
    return function (input) {
      return input ? '\u2713' : '\u2718';
    }
  });