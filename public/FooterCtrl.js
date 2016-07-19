(function () {
    angular
        .module("todo")
        .controller("FooterCtrl", FooterCtrl);

    FooterCtrl.$inject = ["$http", "PersistSvc"];

    function FooterCtrl($http, PersistSvc) {
        var vm = this;
        //Function for total number of tasks
        vm.numberOfTasks = PersistSvc.tasks.length;

        //Function for number of outstanding tasks
        vm.outstandingTasks = function () {
            var result = 0;
            for (i = 0; i < vm.numberOfTasks; i++) {
                if (vm.listOfTasks[i].done == false) {
                    result++
                }
            }
            return result;
        };
    }
})();

