
FileApp.controller("Filectr", function ($scope, FileApi) {
    getDirect();
    var array = {};
    var back = null;
    function getDirect() {
        var direct = FileApi.getDirectory(null);
        direct.then(function (data) {
            array = data.data;
            $scope.direct = array;
            back = array.ParentDir;
        });
        $scope.getNewDirect = function (id) {           
            var direct = FileApi.getDirectory(array.Trees[id]);
            direct.then(function (data) {
                array = data.data;
                $scope.direct = array;
                back = array.ParentDir;
                });
        }
        $scope.getBack= function(){
            var direct = FileApi.getDirectory(back);
            direct.then(function (data) {
                array = data.data;
                $scope.direct = array;
                back = array.ParentDir;
            });
        }
    }
})