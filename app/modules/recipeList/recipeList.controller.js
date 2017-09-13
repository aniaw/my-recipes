(function () {
    'use strict';

    function RecipeListController(RecipeService) {

        var ctrl = this;

        ctrl.newRecipe = {};

        ctrl.recipes = RecipeService.query();

        ctrl.removeRecipe = function (id) {
            RecipeService.remove(id);
            ctrl.isRecipeListEmpty = !ctrl.recipes.length;
        };

        ctrl.addRecipe = function () {
            RecipeService.save(ctrl.newRecipe);
        };

    }

    angular.module('myRecipes').controller('RecipeListController', ['RecipeService', RecipeListController]);

})();
