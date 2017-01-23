(function(){
angular.module("hobook").directive("footer", footer);
function footer() {
    return {
      restrict: 'A',
      templateUrl: "angular-app/common/footer.html"}
};
})();
