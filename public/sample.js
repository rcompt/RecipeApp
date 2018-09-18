var app = angular.module('StarterApp', ['ngMaterial', 'ngMdIcons']);

app.controller('AppCtrl', ['$scope', '$mdBottomSheet','$mdSidenav', '$mdDialog', function($scope, $mdBottomSheet, $mdSidenav, $mdDialog){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
 	$scope.menu = [
    {
      link : '',
      title: 'Dashboard',
      icon: 'dashboard'
    },
    {
      link : '',
      title: 'Friends',
      icon: 'group'
    },
    {
      link : '',
      title: 'Messages',
      icon: 'message'
    }
  ];
  $scope.admin = [
    {
      link : '',
      title: 'Trash',
      icon: 'delete'
    },
    {
      link : 'showListBottomSheet($event)',
      title: 'Settings',
      icon: 'settings'
    }
  ];
  $scope.recipes = [
      {
        name: 'Mongolian Beef Ramen Noodles',
        instructions: [
			"Slice the flank steak into small thin pieces against the grain. In a large ziploc bag add the starch and the beef to it. Close the ziploc bag and shake really well until each pieces is coated with cornstarch.",
			"In a non stick skillet heat the oil. When the oil is hot, add beef and cook until browned. It will take 2 or 3 batches because you don't want the steak pieces to stick to each other. Also if you need more oil after the first batch feel free to add more. Remove beef from skillet to a plate and empty the oil from the skillet.",
			"Add the bell pepper to the skillet and saute it for a couple minutes just until it gets soft. Remove the pepper from the skillet to a plate and set aside.",
			"In that same skillet add sauce ingredients, the sesame oil, soy sauce, brown sugar, garlic, chicken broth and red pepper flakes. Stir and cook over medium heat until sauce thickens a bit and reduces by about a quarter. It took me about 10 minutes until the sauce thickened and reduced. You don't want to reduce it too much because you need more sauce for the noodles.",
			"In the meantime cook the ramen noodles according to package instructions.",
			"Return the beef and bell pepper to the skillet and toss in the sauce. Add the cooked ramen noodles to the skillet and toss everything together. Top with green onions and serve."
		],
        ingredients: [
			{
				food: "steak",
				amount: 1.5,
				measure: "lbs"
			},
			{
				food: "cornstarch",
				amount: .25,
				measure: "cup"
			},
			{
				food: "vegetable oil",
				amount: .25,
				measure: "cup"
			},			
			{
				food: "bell pepper",
				amount: 1,
				measure: "count"
			},
			{
				food: "ramen noodles",
				amount: 8,
				measure: "oz"
			},
			{
				food: "green onions",
				amount: 3,
				measure: "count"
			},	
			{
				food: "sesame oil",
				amount: 2,
				measure: "tbsp"
			},
			{
				food: "soy sauce",
				amount: .75,
				measure: "cup"
			},
			{
				food: "brown sugar",
				amount: .667,
				measure: "cup"
			},			
			{
				food: "chicken broth",
				amount: 1.25,
				measure: "cup"
			},
			{
				food: "garlic cloves",
				amount: 4,
				measure: "count"
			},
			{
				food: "red pepper flakes",
				amount: .25,
				measure: "tsp"
			},				
		],
        time: 50,
		servings: 4,
		img: "data/images/mongolian-beef-ramen-noodles-1-13.jpg"
      },
	  {
        name: 'Angela\'s Awesome Enchiladas',
        instructions: [
			"Place the chicken in a large pot and add water to cover. Bring to a boil over high heat, then reduce the heat to medium-low, cover, and simmer until the chicken pieces are no longer pink, about 10 minutes. Shred chicken by placing two forks back to back and pulling meat apart. Set the shredded chicken aside. Meanwhile, combine the cream of chicken soup, sour cream, and chili powder in a saucepan. Bring to a simmer over low heat, stirring occasionally, then turn off the heat and cover to keep warm.",
			"Heat the butter in a skillet over medium heat. Stir in the onion; cook and stir until the onion has softened and turned translucent, about 5 minutes. Add the shredded chicken, chopped green chilies, taco seasoning, half of the bunch of chopped green onion, and water. Allow to simmer for 10 minutes. Stir in the lime juice, onion powder, and garlic powder; simmer for an additional 10 minutes.",
			"Preheat an oven to 350 degrees F (175 degrees C). Stir 1 cup of the soup mixture into the skillet with the chicken mixture. Spread the remaining soup mixture on the bottom of a 9x13 inch baking dish.",
			"Fill each tortilla with chicken mixture. Sprinkle Cheddar cheese over the chicken filling before folding the tortillas, reserving half of the shredded cheese for topping the enchiladas. Fold tortillas over the filling and place seam-side down in the prepared pan.",
			"Pour enchilada sauce evenly over the enchiladas. Cover with the remaining 1 1/2 cups of Cheddar cheese. Sprinkle the reserved chopped green onions and the sliced olives on top of the cheese. Bake in the preheated oven until filling is heated through and the cheese is melted and bubbling, about 25 minutes.",
		],
        ingredients: [
			{
				food: "chicken",
				amount: 2,
				measure: "lbs"
			},
			{
				food: "condensed cream of chicken soup",
				amount: 10.75,
				measure: "oz"
			},
			{
				food: "sour cream",
				amount: 1.25,
				measure: "cup"
			},			
			{
				food: "chili powder",
				amount: .25,
				measure: "tsp"
			},
			{
				food: "butter",
				amount: 1,
				measure: "tbsp"
			},
			{
				food: "onion",
				amount: 1,
				measure: "count"
			},	
			{
				food: "chopped green chilies",
				amount: 4,
				measure: "oz"
			},
			{
				food: "taco seasoning",
				amount: 2.5,
				measure: "tbsp"
			},
			{
				food: "green onions",
				amount: 1,
				measure: "count"
			},			
			{
				food: "water",
				amount: 1,
				measure: "cup"
			},
			{
				food: "lime juice",
				amount: 1,
				measure: "tsp"
			},
			{
				food: "onion powder",
				amount: .5,
				measure: "tsp"
			},		
			{
				food: "garlic powder",
				amount: .5,
				measure: "tsp"
			},		
			{
				food: "flour tortilas",
				amount: 5,
				measure: "count"
			},	
			{
				food: "chedder cheese",
				amount: 3,
				measure: "cups"
			},		
			{
				food: "enchilada sauce",
				amount: 10,
				measure: "oz"
			},		
			{
				food: "sliced black olives",
				amount: 6,
				measure: "oz"
			},				
		],
        time: 105,
		servings: 8,
		img: "data/images/awesome-enchiladas.jpg"
      }
    ];
  $scope.alert = '';
  $scope.showListBottomSheet = function($event) {
    $scope.alert = '';
    $mdBottomSheet.show({
      template: '<md-bottom-sheet class="md-list md-has-header"> <md-subheader>Settings</md-subheader> <md-list> <md-item ng-repeat="item in items"><md-item-content md-ink-ripple flex class="inset"> <a flex aria-label="{{item.name}}" ng-click="listItemClick($index)"> <span class="md-inline-list-icon-label">{{ item.name }}</span> </a></md-item-content> </md-item> </md-list></md-bottom-sheet>',
      controller: 'ListBottomSheetCtrl',
      targetEvent: $event
    }).then(function(clickedItem) {
      $scope.alert = clickedItem.name + ' clicked!';
    });
	
  $scope.data = [ "Item 1", "Item 2", "Item 3", "Item 4"]
  $scope.toggle = {};
  };
  
  $scope.showAdd = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      template: '<md-dialog aria-label="Mango (Fruit)"> <md-content class="md-padding"> <form name="userForm"> <div layout layout-sm="column"> <md-input-container flex> <label>First Name</label> <input ng-model="user.firstName" placeholder="Placeholder text"> </md-input-container> <md-input-container flex> <label>Last Name</label> <input ng-model="theMax"> </md-input-container> </div> <md-input-container flex> <label>Address</label> <input ng-model="user.address"> </md-input-container> <div layout layout-sm="column"> <md-input-container flex> <label>City</label> <input ng-model="user.city"> </md-input-container> <md-input-container flex> <label>State</label> <input ng-model="user.state"> </md-input-container> <md-input-container flex> <label>Postal Code</label> <input ng-model="user.postalCode"> </md-input-container> </div> <md-input-container flex> <label>Biography</label> <textarea ng-model="user.biography" columns="1" md-maxlength="150"></textarea> </md-input-container> </form> </md-content> <div class="md-actions" layout="row"> <span flex></span> <md-button ng-click="answer(\'not useful\')"> Cancel </md-button> <md-button ng-click="answer(\'useful\')" class="md-primary"> Save </md-button> </div></md-dialog>',
      targetEvent: ev,
    })
    .then(function(answer) {
      $scope.alert = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.alert = 'You cancelled the dialog.';
    });
  };
}]);

app.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
  $scope.items = [
    { name: 'Share', icon: 'share' },
    { name: 'Upload', icon: 'upload' },
    { name: 'Copy', icon: 'copy' },
    { name: 'Print this page', icon: 'print' },
  ];
  
  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
});

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
};

app.directive('userAvatar', function() {
  return {
    replace: true,
    template: '<svg class="user-avatar" viewBox="0 0 128 128" height="64" width="64" pointer-events="none" display="block" > <path fill="#FF8A80" d="M0 0h128v128H0z"/> <path fill="#FFE0B2" d="M36.3 94.8c6.4 7.3 16.2 12.1 27.3 12.4 10.7-.3 20.3-4.7 26.7-11.6l.2.1c-17-13.3-12.9-23.4-8.5-28.6 1.3-1.2 2.8-2.5 4.4-3.9l13.1-11c1.5-1.2 2.6-3 2.9-5.1.6-4.4-2.5-8.4-6.9-9.1-1.5-.2-3 0-4.3.6-.3-1.3-.4-2.7-1.6-3.5-1.4-.9-2.8-1.7-4.2-2.5-7.1-3.9-14.9-6.6-23-7.9-5.4-.9-11-1.2-16.1.7-3.3 1.2-6.1 3.2-8.7 5.6-1.3 1.2-2.5 2.4-3.7 3.7l-1.8 1.9c-.3.3-.5.6-.8.8-.1.1-.2 0-.4.2.1.2.1.5.1.6-1-.3-2.1-.4-3.2-.2-4.4.6-7.5 4.7-6.9 9.1.3 2.1 1.3 3.8 2.8 5.1l11 9.3c1.8 1.5 3.3 3.8 4.6 5.7 1.5 2.3 2.8 4.9 3.5 7.6 1.7 6.8-.8 13.4-5.4 18.4-.5.6-1.1 1-1.4 1.7-.2.6-.4 1.3-.6 2-.4 1.5-.5 3.1-.3 4.6.4 3.1 1.8 6.1 4.1 8.2 3.3 3 8 4 12.4 4.5 5.2.6 10.5.7 15.7.2 4.5-.4 9.1-1.2 13-3.4 5.6-3.1 9.6-8.9 10.5-15.2M76.4 46c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6-.1-.9.7-1.6 1.6-1.6zm-25.7 0c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6-.1-.9.7-1.6 1.6-1.6z"/> <path fill="#E0F7FA" d="M105.3 106.1c-.9-1.3-1.3-1.9-1.3-1.9l-.2-.3c-.6-.9-1.2-1.7-1.9-2.4-3.2-3.5-7.3-5.4-11.4-5.7 0 0 .1 0 .1.1l-.2-.1c-6.4 6.9-16 11.3-26.7 11.6-11.2-.3-21.1-5.1-27.5-12.6-.1.2-.2.4-.2.5-3.1.9-6 2.7-8.4 5.4l-.2.2s-.5.6-1.5 1.7c-.9 1.1-2.2 2.6-3.7 4.5-3.1 3.9-7.2 9.5-11.7 16.6-.9 1.4-1.7 2.8-2.6 4.3h109.6c-3.4-7.1-6.5-12.8-8.9-16.9-1.5-2.2-2.6-3.8-3.3-5z"/> <circle fill="#444" cx="76.3" cy="47.5" r="2"/> <circle fill="#444" cx="50.7" cy="47.6" r="2"/> <path fill="#444" d="M48.1 27.4c4.5 5.9 15.5 12.1 42.4 8.4-2.2-6.9-6.8-12.6-12.6-16.4C95.1 20.9 92 10 92 10c-1.4 5.5-11.1 4.4-11.1 4.4H62.1c-1.7-.1-3.4 0-5.2.3-12.8 1.8-22.6 11.1-25.7 22.9 10.6-1.9 15.3-7.6 16.9-10.2z"/> </svg>'
  };
});

app.config(function($mdThemingProvider) {
  var customBlueMap = 		$mdThemingProvider.extendPalette('light-blue', {
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50'],
    '50': 'ffffff'
  });
  $mdThemingProvider.definePalette('customBlue', customBlueMap);
  $mdThemingProvider.theme('default')
    .primaryPalette('customBlue', {
      'default': '500',
      'hue-1': '50'
    })
    .accentPalette('pink');
  $mdThemingProvider.theme('input', 'default')
        .primaryPalette('grey')
});
