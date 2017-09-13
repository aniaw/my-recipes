(function () {
    'use strict';

    function RecipeService() {
        var service = this;

        var recipes = [
            {id: 1, name: 'Magic recipe', bigAmount: true, ingredients: [{name: 'milk', amount: 1, unit: 'cup', method: 'cook'}]},
            {id: 2, name: 'New recipe', bigAmount: true, ingredients: [{name: 'flour', amount: 300, unit: 'pound', method: 'cook'}]}
        ];

        service.query = function () {
            return recipes;

        };
        service.get = function (id) {
            return _.find(recipes, function (recipe) {
                return recipe.id === id;
            });
        };

        service.update = function (recipe) {
            var match = service.get(recipe.id);
            match.ingredients.push(angular.copy(recipe.ingredient));
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
