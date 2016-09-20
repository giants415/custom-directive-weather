angular.module('weatherApp')
       .directive('currentWeather', currentWeather);

  function currentWeather () {
    var directive = {
      scope: {
        city: '@',
        weather: '@'
      },
      restrict: 'EA',
      templateUrl: '/views/templates/weatherDirective.html',
      replace: true,
      controllerAs: 'weatherCardCtrl',
      controller: WeatherCardController()
    };
    return directive;
  }

  function WeatherCardController($http) {
     controller: ['$http', function($http){
       var vm = this;
       var url="http://api.openweathermap.org/data/2.5/weather?mode=json&cnt=7&units=imperial&callback=JSON_CALLBACK&q=";
       var apikey = "&appid=" + 'feabb831e3da04d66be31f4a618123ef';
       vm.getWeather = function(city){
         $http({
           method: 'JSONP',
           url: url + city + apikey
          }).success(function(data){
            vm.weather = data;
            console.log(data);
            });
         }
        }]
  }

  // ['$http', function($http){ var vm = this; var url="http://api.openweathermap.org/data/2.5/weather?mode=json&cnt=7&units=imperial&callback=JSON_CALLBACK&q="; var apikey = "&appid=" + 'feabb831e3da04d66be31f4a618123ef'
  //   ; vm.getWeather = function(city){ $http({method: 'JSONP', url: url + city + apikey}) .success(function(data){ vm.weather = data; }); } }],
