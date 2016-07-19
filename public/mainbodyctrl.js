(function () {
    angular
        .module("todo")
        .controller("MainBodyCtrl", MainBodyCtrl);

    MainBodyCtrl.$inject = ["$http", "PersistSvc"];

    function MainBodyCtrl($http, PersistSvc) {
        var vm = this;

        vm.listOfTasks = PersistSvc.tasks;
        vm.task = PersistSvc.taskObject();
        //STATUS CODE & MSG OBJECT
        vm.status = {
            message: "",
            code: 0
        };

        //TODAY'S DATE
        var todaysDate = function () {
            today = new Date();
            dd = today.getDate();
            mm = today.getMonth() + 1; //January is 0!
            yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd
            }
            if (mm < 10) {
                mm = '0' + mm
            }
            return today = dd + '-' + mm + '-' + yyyy;
        };

        //Function for displaying task due date
        vm.timeLeft = function () {
            todaysDate();
            if (today == PersistSvc.task.dueDate) {
                return "Today, " + PersistSvc.task.dueTime;
            } else if ((+PersistSvc.task.dueDate.substring(0, 2)) - (+dd) == 1 &&
                (+PersistSvc.task.dueDate.substring(3, 5)) == mm) {
                return "Tomorrow";
            } else {
                return PersistSvc.task.dueDate + " " + PersistSvc.task.dueTime;
            }
        };

        //FUNCTION FOR UPDATING TASK
        vm.updateTask = function () {
            PersistSvc.updateTask(task)
                .then(function (err) {
                    console.log(err);
                    vm.status.message = "An error occurred while updating task";
                    vm.status.code = 400;
                }).catch(function (result) {
                console.log(result);
                vm.status.message = "Task updated successfully";
                vm.status.code = 202;
            })
        };

        //FUNCTION FOR DELETING TASK
        vm.deleteTask = function () {
            PersistSvc.deleteTask(task)
                .then(function (err) {
                    console.log(err);
                    vm.status.message = "An error occurred while deleting task";
                    vm.status.code = 400;
                }).catch(function (result) {
                console.log(result);
                vm.status.message = "Task deleted successfully";
                vm.status.code = 202;
            })
        };
    }
})();

