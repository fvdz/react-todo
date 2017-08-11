var $ = require('jQuery');

module.exports = {

   setTodos: function (todos) {
      if ($.isArray(todos)) {
         localStorage.setItem('todos', JSON.stringify(todos));
         return todos;
      }
   },
   getTodos: function() {
      var stringTodos = localStorage.getItem('todos');
      var todos = [];

      try {
         todos = JSON.parse(stringTodos);
      } catch (e) {

      }
      return $.isArray(todos) ? todos : [];
   },
   filteredTodos: function (todos, showCompleted, searchText) {
      var filteredTodos = todos;

      // Filter by showCompleted
      filteredTodos = filteredTodos.filter((todo) => {
         // Show only todos who not been completed or show all
         // todos when the checkbox showCompleted is checked.
         return !todo.completed || showCompleted;
      });

      // Filter by searchText
      filteredTodos = filteredTodos.filter((todo) => {
         var text = todo.text.toLowerCase();
         return searchText.length === 0 || text.indexOf(searchText) > -1;
      });

      // Sort todo with non-completed first
      filteredTodos.sort((a, b) => {
         if ( !a.completed && b.completed)
            return -1;
         else if ( a.completed && !b.completed)
            return 1;
         else
            return 0;
         // return -1; // a < b
         // return 1; // a > b
         // return 0; // a === b
      });

      return filteredTodos;
   }

};
