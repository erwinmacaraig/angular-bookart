var app = angular.module('myApp', ["ngRoute", "ngAnimate"]);

app.config(function($routeProvider){
	$routeProvider
		.when("/books", {
			templateUrl: "partials/book-list.html",
			controller: "BookListCtrl"
		})
		.when("/kart", {
			templateUrl: "partials/kart-list.html",
			controller: "KartListCtrl"
			
		})
		.otherwise({
			redirectTo: "/books"
		})
		;
	// use the HTML5 History API
	//,$locationProvider
    //$locationProvider.html5Mode(true);
		
});

app.factory('bookService', function(){
	var books = [
        {
			 imgUrl:"adultery.jpeg",
			 name:"Adultery",
			 price:205,
			 rating: 4,
			 binding: "Paperback",
			 publisher: "Random House India",
			 releaseDate: "12-08-2014",
			 details: "Linda, in her thirties, begins to question the routine and predictability of her days"
        },
        {
			 imgUrl:"geronimo.jpeg",
			 name: "Geronimo Stilton Spacemice#2: You're Mine, Captain!",
			 price: 168,
			 rating: 5,
			 binding: "Paperback",
			 publisher: "Scholastic",
			 releaseDate: "01-07-2014",
			 details:"Geronimo Stilton meets outer space in this cosmically fun spin-off series"	 

        },
        {
			 imgUrl:"the-fault.jpeg",
			 name: "The Fault in our Stars",
			 price: 227,
			 rating: 4.5,
			 binding: "Paperback",
			 publisher: "Penguin Books Ltd",
			 releaseDate: "25-01-2013",
			 details:"Despite the tumor-shrinking medical miralce that has bought her a few years"	 
	
        }
    ];
    return {
    	getBooks: function(){
    		return books;
    	}
    }
});

app.factory('kartService', function(){
var kart = [];

return {
	getKart: function(){
		return kart;
	},
	addToKart:function(book){
		kart.push(book);
	},
	buy: function(book) {
		alert("Thanks for buying: ", book.name);
	}
	
	
}

});
app.controller('HeaderCtrl', function($scope, $location){
	$scope.appDetails = { title: "BooKart", tagline:"We have 1 million books for you"};
	$scope.nav = {};
	$scope.nav.isActive = function(path) {
		if(path === $location.path()) {
			return true;
		}
		return false;
	}
	

});

app.controller('KartListCtrl', function($scope, kartService){
	$scope.kart = kartService.getKart();
	
	$scope.buy = function(book) {
		kartService.buy(book);
	}

});
app.controller('BookListCtrl', function($scope,bookService, kartService){
    $scope.books = bookService.getBooks();
    
    $scope.addToKart = function(book) { 
    	kartService.addToKart(book);
    }
    
});

