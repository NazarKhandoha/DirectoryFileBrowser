FileApp.service("FileApi", function ($http) {
    this.getDirectory = function (takeUrl) {
        if (takeUrl == null) {
            return $http.get('api/Values?path=');
        }
        else {          
            return $http.get('api/Values?path='+takeUrl);
        }
    }
});