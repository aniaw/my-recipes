(function () {
    'use strict';

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('recipe', {
            url: '/',
            templateUrl: '/modules/recipeList/recipeList.view.html',
            controller: 'RecipeListController',
            controllerAs: 'recipeListCtrl'
        }).state('recipe.detail', {
            url: '^/recipe/:id',
            views: {
                'detail': {
                    templateUrl: 'modules/recipeDetails/recipeDetails.view.html',
                    controller: 'RecipeDetailsController',
                    controllerAs: 'recipeDetailsCtrl'
                }
            }
        });
    }

    angular.module('myRecipes').config(['$stateProvider', '$urlRouterProvider', config]);
})();
