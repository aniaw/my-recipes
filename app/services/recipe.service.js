(function () {
    'use strict';

    var id = 3;

    function RecipeService() {
        var service = this;

        var recipes = [
            {id: 1, name: 'Magic recipe', bigAmount: true, ingredients: [{name: 'milk', amount: 1, unit: 'cup', method: 'cook'}]},
            {id: 2, name: 'Amazing recipe', bigAmount: true, ingredients: [{name: 'flour', amount: 300, unit: 'pound', method: 'cook'}]}
        ];

        service.query = function () {
            return recipes;
        };

        service.get = function (id) {
            return _.find(recipes, function (recipe) {
                return recipe.id === id;
            });
        };

        service.getIngredientsSum = function (id) {
            var ingredients = service.get(id).ingredients;
           return _.sumBy(ingredients, 'amount');
        };

        service.update = function (recipe) {
            var match = service.get(recipe.id);
            match.ingredients.push(angular.copy(recipe.ingredient));
        };

        service.save = function (recipe) {
            recipe.id = id++;
            recipe.ingredients = [];
            recipes.push(angular.copy(recipe));
            return recipe.id;
        };

        service.remove = function (id) {
            _.remove(recipes, function (recipe) {
                return recipe.id === id;
            });
        };
    }

    angular.module('myRecipes').service('RecipeService', [RecipeService]);
})();
