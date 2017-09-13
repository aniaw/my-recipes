(function () {
    'use strict';

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('recipe', {
            url: '/',
            templateUrl: '/modules/recipeList/recipeList.view.html',
            controller: 'RecipeListController',
            controllerAs: 'recipeListCtrl'
        });
    }

    angular.module('myRecipes').config(['$stateProvider', '$urlRouterProvider', config]);
})();
