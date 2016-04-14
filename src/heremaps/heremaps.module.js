var directive = require('./heremaps.directive'),
    configProvider = require('./providers/config.provider'),
    apiService = require('./providers/api.service'),
    utilsService = require('./providers/utils.service'),
    markersFactory = require('./providers/markers.factory.js'),
    consts = require('./providers/consts');

var heremaps = angular.module('heremaps', []);

heremaps.provider('Config', configProvider)
    .service('APIService', apiService)
    .service('UtilsService', utilsService)
    .factory('MarkersFactory', markersFactory)
    .constant('CONSTS', consts)

heremaps.directive('hereMaps', directive);

heremaps.config(["ConfigProvider", function(ConfigProvider) {
    ConfigProvider.setOptions({
        'apiVersion': '3.0',
        'app_id': 'wMHJuLgCQzkfbhzXIwRF',
        'app_code': 'WLIc7QzoO8irv7lurUt1qA',
        'useHTTPS': true
    });
}]);

module.exports = heremaps;