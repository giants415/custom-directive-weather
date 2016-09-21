angular.module('weatherApp')
       .directive('currentWeather', currentWeather);

  function currentWeather () {
    var directive = {
      restrict: 'E',
      scope: {
        city: '@',
      },
      replace: true,
      templateUrl: 'templates/WeatherDirective.html',
      controllerAs: 'WeatherCardCtrl',
      controller: WeatherCardController
    };

  WeatherCardController.$inject = ['$http', '$scope'];
  function WeatherCardController ($http, $scope) {
       var vm = this;
       var url="http://api.openweathermap.org/data/2.5/weather?mode=json&cnt=7&units=imperial&callback=JSON_CALLBACK&q=";
       var apikey = "&appid=" + 'feabb831e3da04d66be31f4a618123ef';
       vm.getWeather = function(city){
         $http({
           method: 'GET',
           url: url + city + apikey
         }).then(function(response){
            vm.weather = response.data;
            console.log(response);
            });
         };
         vm.getWeather($scope.city);
       };
       return directive;
     }

  // ['$http', function($http){ var vm = this; var url="http://api.openweathermap.org/data/2.5/weather?mode=json&cnt=7&units=imperial&callback=JSON_CALLBACK&q="; var apikey = "&appid=" + 'feabb831e3da04d66be31f4a618123ef'
  //   ; vm.getWeather = function(city){ $http({method: 'JSONP', url: url + city + apikey}) .success(function(data){ vm.weather = data; }); } }],
