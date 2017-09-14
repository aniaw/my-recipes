(function () {
    'use strict';

    function RecipeListController($state, RecipeService) {

        var ctrl = this;

        ctrl.newRecipe = {name: 'New recipe'};

        ctrl.recipes = RecipeService.query();

        ctrl.removeRecipe = function (id) {
            RecipeService.remove(id);
            ctrl.isRecipeListEmpty = !ctrl.recipes.length;
        };

        ctrl.addRecipe = function () {
            var id = RecipeService.save(ctrl.newRecipe);
            ctrl.isRecipeListEmpty = !ctrl.recipes.length;
            $state.go('recipe.detail', {id: id});
        };

    }

    angular.module('myRecipes').controller('RecipeListController', ['$state', 'RecipeService', RecipeListController]);

})();
