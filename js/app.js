// written code insde a IFFE to create namespace and avoid scoping issues
// uses john papa style guide 
//uses tod motto module reveal patteren and controllerAs syntax
//usually in angular js data comes from a service, should not be inside a controller

(function() {
  angular
  	.module("app", [])
  	.controller('TodoCtrl', TodoCtrl);
  
  function TodoCtrl() {
  	var vm = this;
    vm.todos = [
      {text: 'HTML5', status: true},
      {text: 'CSS3', status: false}
    ];
    
    vm.addTodo = function() {
      vm.todos.push({text: vm.todoText, status: false});
      vm.todoText = '';
    };

    vm.archive = function() {
      var oldTodos = vm.todos;
      vm.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.status) vm.todos.push(todo);
      });
    };
  }

})();


