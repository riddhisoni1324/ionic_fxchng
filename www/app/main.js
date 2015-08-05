
(function() {

	var app = angular.module('starter', [
		'ionic',
		// 'permission',
		'starter.app',
		'starter.home',
		'starter.category',
		'starter.ad',
		'ngResource',
		'ngCordova',
		/*'supr.splash',
		'supr.category',
		*/// 'angular-growl',
	]);


	//IonicPlatform Ready
	app.run(function($ionicPlatform) {

		$ionicPlatform.ready(function() {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			
			if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard && window.cordova.plugins.Contacts) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			}

			var checkConnection = function() {

				if (navigator && navigator.connection && navigator.connection.type === 'none') {
					return false;
				}

				return true;
			};

			//console.log("checkConnection", checkConnection());

			if (window.StatusBar) {
				// org.apache.cordova.statusbar required
				StatusBar.styleLightContent();
			}
		});
	});

	//Run & Config Blocks

	//Starting URL
	app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
		$ionicConfigProvider.backButton.icon('');

/*		$stateProvider.state('app', {
			url: "/app",
			abstract: true,
			templateUrl: "app/home/menu.tpl.html",
			controller: "AppController"
			// data: {
			// 	permissions: {
			// 		only: ['user', 'anon'],
			// 		redirectTo: 'splash.started'
			// 	}
			// }
		});
*/
		// $urlRouterProvider.otherwise('app/ad');

	});


	//Constants
	app.constant("REST_BASE_URL","http://localhost/fx_new")

})();
