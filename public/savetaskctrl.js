(function () {
    angular
        .module("todo")
        .controller("SaveTaskCtrl", SaveTaskCtrl);

    SaveTaskCtrl.$inject = ["$http", "PersistSvc"];

    function SaveTaskCtrl($http, PersistSvc) {
        var vm = this;

        vm.task = PersistSvc.taskObject();
        //STATUS CODE & MSG OBJECT
        vm.status = {
            message: "",
            code: 0
        };

        //FUNCTION FOR SAVING NEW TASK
        vm.saveTask = function () {
            PersistSvc.saveTask(vm.task)
                .then(function (err) {
                    console.log(err);
                    vm.status.message = "An error occurred while saving task";
                    vm.status.code = 400;
                }).catch(function (result) {
                console.log(result);
                vm.task = PersistSvc.taskObject();
                vm.status.message = "Task saved successfully";
                vm.status.code = 202;
            })
        };
    }
})();
