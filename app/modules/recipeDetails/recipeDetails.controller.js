(function () {
    'use strict';

    function RecipeDetailsController($stateParams, RecipeService) {

        var ctrl = this;
        var recipeId = parseInt($stateParams.id);

        ctrl.recipe = RecipeService.get(recipeId);

        ctrl.addNewIngredient = function () {
            RecipeService.update({id: recipeId, ingredient: ctrl.newIngredient});
        };

        ctrl.newIngredient = {name: null, amount: null, unit: null, method: null};

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
