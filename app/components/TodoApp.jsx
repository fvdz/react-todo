var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('uuid');

var TodoApp = React.createClass({
   getInitialState: function () {
      return {
         todos: [
            { id: uuid(), text: 'Walk the dog', completed: true },
            { id: uuid(), text: 'Feed the cat', completed: false },
            { id: uuid(), text: 'Clean the yard', completed: false },
            { id: uuid(), text: 'Buy Milk', completed: false }
         ],
         showCompleted: false,
         searchText: ''
      };
   },
   handleAddTodo: function (text) {
      this.setState({
         todos: [
            ...this.state.todos,
            {
               id: uuid(),
               text,
               completed: false
            }
         ]
      });
   },
   handleToggle: function (id) {
      var updatedTodos = this.state.todos.map((todo) => {
         if(todo.id === id) {
            todo.completed = !todo.completed
         }
         return todo;
      });

      this.setState({
         todos: updatedTodos
      });
   },
   handleSearch: function (showCompleted, searchText) {
      this.setState({
         showCompleted,
         searchText: searchText.toLowerCase()
      });
   },
   render: function (){
      var { todos } = this.state;
      return (
         <div>
            <TodoSearch onSearch={this.handleSearch} />
            <TodoList todos={todos} onToggle={this.handleToggle}/>
            <AddTodo onAddTodo={this.handleAddTodo} />
         </div>
      );
   }
});

module.exports = TodoApp;
