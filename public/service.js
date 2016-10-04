
function appServices($http, $q, $rootScope) {
    return ({
        doLogin: doLogin,
        doActionPost: doActionPost,
        doActionGet:doActionGet,
        doSearch: doSearch,
        routeChange: routeChange,
        getUserByToken: getUserByToken,
        chPW: chPW,
        getTable: getTable,
    });
    function doLogin(lInfo) {
        NProgress.start(); $rootScope.isBusy += 1;
        var request = $http({ method: "post", url: "/api/login", data: lInfo });
        return (request.then(handleSuccess, handleError));
    }
    function doActionPost(actionParam, path) {
        NProgress.start(); $rootScope.isBusy += 1;
        var request = $http({ method: "post", url: "/api/" + path, data: actionParam });
        return (request.then(handleSuccess, handleError));
    }
    function doActionGet(actionParam, path) {
        NProgress.start(); $rootScope.isBusy += 1;
        var request = $http({ method: "GET", url: "/api/" + path, data: actionParam });
        return (request.then(handleSuccess, handleError));
    }
    function doSearch(aSearch) {
        NProgress.start(); $rootScope.isBusy += 1;
        var request = $http({ method: "get", url: "api/search/global?Token=" + aSearch.Token + "&Search=" + aSearch.Value });
        return (request.then(handleSuccess, handleError));
    }
    function routeChange(actionParam) {
        $http({ method: "post", url: "api/routechange", data: actionParam });
    }
    function getTable(aTabInfo) {
        NProgress.start(); $rootScope.isBusy += 1;
        var request = $http({ method: "POST", url: "/api/" + aTabInfo.api, data: aTabInfo });
        return (request.then(handleSuccess, handleError));
    }
    function getUserByToken(userToken) {
        $rootScope.isBusy += 1;
        var request = $http({ method: "GET", url: "/api/userfromtoken", data: { "Token": userToken } });
        return (request.then(handleSuccess, handleError));
    }
    function chPW(userToken, oldPW, newPW) {
        NProgress.start(); $rootScope.isBusy += 1;
        var request = $http({ method: "post", url: "api/changepw", data: { "Token": userToken, "Value": oldPW, "Data": newPW } });
        return (request.then(handleSuccess, handleError));
    }
    function handleError(response) {
       NProgress.done(); if ($rootScope.isBusy > 0) $rootScope.isBusy -= 1;
        if (response.data.ExceptionMessage) response.data.Info = "Server Error: " + response.data.ExceptionMessage; else response.data.Info = response.data.message;
        response.data.Code = -1;
        $q.reject(response.data.message);
        return response.data;
    }
    function handleSuccess(response) {
        NProgress.done(); if($rootScope.isBusy > 0) $rootScope.isBusy -= 1;
        return response.data;
    }
}
