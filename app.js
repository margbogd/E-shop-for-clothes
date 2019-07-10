//Defines the 'app' module
var app = angular.module('eshop', ['ionic', 'ngMaterial',
                                  'ngMessages', 'ngRoute',
                                  'ngCookies', 'ngAnimate',
                                  'material.svgAssetsCache']);

//Defines the 'MainController' controller on the 'app' module
app.controller('MainController',
  function($scope, $location, $rootScope,
            $ionicSideMenuDelegate, $anchorScroll,
            CartService) {
  $scope.toggleLeft = () => {
    $ionicSideMenuDelegate.toggleLeft();
  };

  // Change routes programmatically (on browser)
  $scope.go = (path) => {
    console.log(path);
    $location.path(path);
    if ($ionicSideMenuDelegate.isOpen()) {
          $scope.toggleLeft();
    }
  };
  //Go to top button
  $scope.gotoTop = function() {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash('backTT');
        // call $anchorScroll()
        $anchorScroll();
      };

  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
        });

  //Sidemenu's buttons
  $scope.button_loggin = 'Login';
  $scope.button_register = 'Register';

  // CartService
  $scope.cart = CartService.cart;
 });

// Material theming
app.config(function($mdThemingProvider, $routeProvider, $locationProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('blue')
  .accentPalette('blue-grey')
  .warnPalette('blue');

  $routeProvider
  .when('/', {
    templateUrl: './features/carousel.html',
    controller: 'CarouselController',
    title: 'Home'
  })
    .when('/about', {
    templateUrl: './features/about.html',
    controller: 'AboutController',
    title: 'About'
  })
  .when('/contact', {
    templateUrl: './features/contact.html',
    controller: 'ContactController',
    title: 'Contact'
  })
  .when('/login', {
    templateUrl: './login/login_view.html',
    controller: 'LoginController',
    title: 'Login'
  })
  .when('/register', {
    templateUrl: './register/register_view.html',
    controller: 'RegisterController',
    title: 'Register'
  })
  .when('/women', {
    templateUrl: './features/clothes/list.html',
    controller: 'ClothesController',
    title: 'Women',
    filter: 'Female'
  })
  .when('/men', {
    templateUrl: './features/clothes/list.html',
    controller: 'ClothesController',
    title: 'Men',
    filter: 'Male'
  })
  .when('/details/:id', {
    templateUrl: './features/clothes/details.html',
    controller: 'DetailsController',
    title: 'Details'
  })
  .when('/logged', {
    templateUrl: './login/logged/logged.html',
    controller: 'LoggedController',
    title: 'Welcome Back'
  })
  .when('/registered', {
    templateUrl: './register/registered/registered.html',
    controller: 'RegisteredController',
    title: 'Welcome User'
  })
  .otherwise({redirectTo: '/'});
});

//Controllers
app.controller('ContactController', function($scope) {});

app.controller('AboutController', function($scope) {});

app.controller('CarouselController', function($scope) {
   $scope.items = [
    {
      img: 'img/item1_woman.jpg',
      alt: 'Handbag with details',
      caption: 'Handbag with details'
    },
    {
      img: 'img/item2_man.jpg',
      alt: 'Jean Jacket',
      caption: 'Jean Jacket'
    },
    {
      img: 'img/item3_woman.jpg',
      alt: 'Pastel Blue Flowerdress',
      caption: 'Pastel Blue Flowerdress'
    },
    {
      img: 'img/item4_man.jpg',
      alt: 'Black Jacket',
      caption: 'Black Jacket'
    },
  ];
});

app.controller('LoginController', function($scope) {});

app.controller('RegisterController', function($scope) {});

app.controller('ClothesController', function($scope, $route, ClothesService) {
  $scope.clothes = ClothesService.getAll($route.current.$$route.filter);
});

app.controller('DetailsController', function($scope, $route, $location,
                                            ClothesService, CartService) {
  $scope.cloth = ClothesService.get($route.current.params.id);
  $scope.button_buy = 'Buy';

  $scope.addItem = function(item) {
    CartService.add(item);
  }

  // Provide category to go back to
  $scope.goBack = function(category = 'Female') {
        let path = category === 'Female' ? '/women':'/men';
        $location.path(path);
  };
 });

app.controller('RegisteredController', function($scope) {});
app.controller('LoggedController', function ($scope) {});

app.run(run);

run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
  function run($rootScope, $location, $cookies, $http) {
    // keep user logged in after page refresh
    $rootScope.globals = $cookies.getObject('globals') || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      // redirect to login page if not logged in and trying to access a restricted page
      var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
      var loggedIn = $rootScope.globals.currentUser;
      // if (restrictedPage && !loggedIn) {
      // }
  });
}
