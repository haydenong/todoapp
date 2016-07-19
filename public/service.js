(function () {
    angular
        .module("todo")
        .service("PersistSvc", PersistSvc);

    PersistSvc.$inject = ["$http", "$q"];

    function PersistSvc($http, $q) {
        var self = this;

        self.tasks= [];

        //GET METHOD promise to retrieve all the task
        this.listTasks = function () {
            var defer = $q.defer();

            $http.get("/tasks/list")
                .then(function (result) {
                    defer.resolve(result);
                })
                .catch(function (err) {
                    defer.reject(err);
                });
            return defer.promise;
        };

        //POST METHOD promise for adding task to DB including pushing task to svc obj
        this.saveTask = function (task) {
            $http.post("/task/save", task)
                .then(function (result) {
                    self.tasks.push(task);
                    defer.resolve(result);
                })
                .catch(function (err) {
                    defer.reject(err);
                });
            return defer.promise;
        };

        //PUT METHOD promise for updating DONE status
        this.updateTask = function (task, callback) {
            $http.put("/task/update", task)
                .then(function (result) {
                    defer.resolve(result);
                })
                .catch(function (err) {
                    defer.reject(err);
                });
            return defer.promise;
        };

        //DELETE METHOD promise for deleting task
        this.deleteTask = function (task, callback) {
            $http.delete("/task/delete", task)
                .then(function (result) {
                    defer.resolve(result);
                })
                .catch(function (err) {
                    defer.reject(err);
                });
            return defer.promise;
        };

        //TASK FACTORY
        this.tasksObject = function () {
            var task = {};
            task.text = "";
            task.done = "";
            task.priority = "";
            task.inputDate = "";
            var newSplitDate = task.inputDate.split(" ");
            task.dueDate = newSplitDate[0];
            task.dueTime = newSplitDate[1];
            return task;
        };


        this.listTasks()
            .then(function (result) {
                self.tasks = result;
            })
            .catch(function () {

            })
    }


})();
