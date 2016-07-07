/**
 * Created by HF on 5/7/2016.
 */
(function () {
    var todo = angular.module("todo", []);

    var todoCtrl = function () {
        var ctrl = this;
        ctrl.todos = [
            {text: "Feed the pug", done: false, priority: 2},
            {text: "Clean my room", done: false, priority: 2}
        ];

        ctrl.list=function () {
            ctrl.todos.push({text: ctrl.task, done: false, priority: ctrl.priority});
            ctrl.task = "";
        }

        ctrl.totalTodos = function () {
            console.info(ctrl.todos[0])
            return ctrl.todos.length;
        }


        ctrl.outstandingTasks = function () {
            var result = 0;
            for(i=0; i < (ctrl.todos.length); i++){
                if (ctrl.todos[i].done == false){
                    result++
                }
            }
            console.info(result);
            return result;
        }


    }
    todo.controller("todoCtrl", [todoCtrl]);
})();