// angular
//   .module('weatherApp')
//   .controller('WeatherIndexController', WeatherIndexController);
//
// function WeatherIndexController() {
//    controller: ['$http', function($http){
//      var vm = this;
//      var url="http://api.openweathermap.org/data/2.5/weather?q=";
//      var apikey = "&appid=" + 'feabb831e3da04d66be31f4a618123ef';
//      vm.getWeather = function(city){
//        $http({
//          method: 'JSONP',
//          url: url + city + apikey})
//          .success(function(data){ vm.weather = data; }); } }],
