(function () {

    var app = angular.module("githubViewer");

    var RepoController = function (
        $scope, github, $routeParams) {

        var onRepoComplete = function(data) {
            $scope.repo = data;
        };

        var onError = function(reason) {
            $scope.error = reason;
        };

        $scope.username = $routeParams.username;
        $scope.reponame = $routeParams.reponame;
        github.getRepoDetails($scope.username, $scope.reponame).then(onRepoComplete, onError);

    };

    app.controller("RepoController", [
        "$scope",
        "github",
        "$routeParams", 
        RepoController]);
} ());