(function () {
    'use strict';

    function RecipeDetailsController($stateParams, RecipeService) {

        var ctrl = this;
        var recipeId = parseInt($stateParams.id);

        ctrl.recipe = RecipeService.get(recipeId);

        ctrl.addNewIngredient = function () {
            var ingredientsCount = RecipeService.getIngredientsCount(recipeId);

            if(ingredientsCount < 3 || ((ingredientsCount >= 3) && ctrl.recipe.bigAmount)){
                RecipeService.update({id: recipeId, ingredient: ctrl.newIngredient});
            }
            else {
                //TODO alert
                console.error('Too many ingredients');
            }

        };

        ctrl.newIngredient = {name: null, amount: null, unit: null, method: null};

        ctrl.ingredientList = [
            {name: 'potato'},
            {name: 'milk'},
            {name: 'chocolate'}
        ];

        ctrl.unitList = [
            {name: 'cup'},
            {name: 'quart'},
            {name: 'gallon'}
        ];

        ctrl.cookingMethodList = [
            {name: 'cook'},
            {name: 'chop'},
            {name: 'mix'}
        ];
    }

    angular.module('myRecipes').controller('RecipeDetailsController', ['$stateParams', 'RecipeService', RecipeDetailsController]);

})();
