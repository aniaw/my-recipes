(function () {
            'use strict';

            function RecipeService() {
                var service = this;

                var recipes = [
                    {id: 1, name: 'recipe1', bigAmount: true, ingredients: [{name: 'ingredient1', amount: 1, unit: 'cup', cookingMethod: 'cook'}]},
                    {id: 2, name: 'recipe2', bigAmount: true, ingredients: [{name: 'ingredient1', amount: 300, unit: 'pound', cookingMethod: 'eh'}]}
                ];

                service.query = function () {
                    return recipes;

                };
                service.get = function (id) {
                    return _.find(recipes, function (recipe) {
                        return recipe.id === id;
                    });
                };
                service.save = function (recipe) {
                    recipes.push(recipe);
                };
                service.remove = function (id) {

                    _.remove(recipes, function (recipe) {
                        return recipe.id === id;
                    });
                };

            }

            angular.module('myRecipes').service('RecipeService', [RecipeService]);
        })();
