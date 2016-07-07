/**
 * Created by HF on 5/7/2016.
 */
(function () {
    var todo = angular.module("todo", ['angularjs-datetime-picker']);

    var todoCtrl = function () {
        var ctrl = this;


        // ctrl.printDate = function (date) {
        //     var today = new Date();
        //     var dateToCheck = new Date(date);
        //
        //     var result = date;
        //
        //     if (today.getMonth() == dateToCheck.getMonth()
        //         && today.getDate() == dateToCheck.getDate()
        //         && today.getYear() == dateToCheck.getYear()
        //     ) {
        //         result = "Today";
        //     }else{
        //
        //     }
        //
        //     return result
        // };


        ctrl.todos = [
            {text: "Feed the pug", done: false, dueDate: "today", priority: 2},
            {text: "Clean my room", done: false, dueDate: "today", priority: 2}
        ];


        ctrl.list = function () {
            var d = new Date();
            var DD = ctrl.dueDate.charAt(0) + ctrl.dueDate.charAt(1);
            var MM = ctrl.dueDate.charAt(3) + ctrl.dueDate.charAt(4);
            var YYYY = ctrl.dueDate.charAt(6) + ctrl.dueDate.charAt(7) + ctrl.dueDate.charAt(8) + ctrl.dueDate.charAt(9);
            var dueDateString = DD + "-" + MM + "-" + YYYY;
            ctrl.todos.push({
                text: ctrl.task, done: false, dueDate: ctrl.dueDate, priority: ctrl.priority,
                dueDateString: dueDateString, dueDateStringDD: DD, dueDateStringMM: MM, dueDateStringYYYY: YYYY
            });
            ctrl.task = "";
        };

        // //Function for Today's date
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        today = dd + '-' + mm + '-' + yyyy;
        //Function for today's date^^
        ctrl.timeLeft = function (todo) {
            if (today == todo.dueDateString) {
                return "Today";
            } else if (todo.dueDateStringDD - dd == 1 && todo.dueDateStringMM == mm) {
                return "Tomorrow";
            } else {
                return todo.dueDate;
            }
        };


        ctrl.totalTodos = function () {
            return ctrl.todos.length;
        };


        ctrl.outstandingTasks = function () {
            var result = 0;
            for (i = 0; i < (ctrl.todos.length); i++) {
                if (ctrl.todos[i].done == false) {
                    result++
                }
            }
            return result;
        }


    }
    todo.controller("todoCtrl", [todoCtrl]);
})();