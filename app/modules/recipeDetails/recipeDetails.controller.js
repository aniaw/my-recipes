(function () {
    'use strict';

    function RecipeDetailsController($stateParams, RecipeService) {

        var ctrl = this;
        var recipeId = parseInt($stateParams.id);

        ctrl.recipe = RecipeService.get(recipeId);

        ctrl.addNewIngredient = function () {

            var ingredientsSum;
            var isAllowed;

            function canAddIngredient() {
                var belowLimit = ctrl.newIngredient.amount + ingredientsSum < 1000;
                var moreButPermittedAmout = ((ctrl.newIngredient.amount + ingredientsSum) > 1000) && ctrl.recipe.bigAmount;
                return belowLimit || moreButPermittedAmout;
            }

            ingredientsSum = RecipeService.getIngredientsSum(recipeId);
            isAllowed = canAddIngredient();

            if (isAllowed) {
                RecipeService.update({id: recipeId, ingredient: ctrl.newIngredient});
            }
            else {
                //TODO alert
                console.error('Too much!');
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
