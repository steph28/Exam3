(function(){
angular.module("hobook").directive("header", header);
function header() {
    return {
      restrict: 'A',
      templateUrl: "angular-app/common/header.html"}
};
})();
