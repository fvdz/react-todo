var React = require('react');
var uuid = require('uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
   getInitialState: function () {
      return {
         todos: TodoAPI.getTodos(),
         showCompleted: false,
         searchText: ''
      };
   },
   componentDidUpdate: function () {
      TodoAPI.setTodos(this.state.todos);
   },
   handleAddTodo: function (text) {
      this.setState({
         todos: [
            ...this.state.todos,
            {
               id: uuid(),
               text,
               completed: false,
               createdAt: moment().unix(),
               completedAt: undefined
            }
         ]
      });
   },
   handleToggle: function (id) {
      var updatedTodos = this.state.todos.map((todo) => {
         if(todo.id === id) {
            todo.completed = !todo.completed;
            todo.completedAt = todo.completed ? moment().unix() : undefined;
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
      var { todos, showCompleted, searchText } = this.state;
      var filteredTodos = TodoAPI.filteredTodos(todos, showCompleted, searchText);
      return (
         <div>
            <h1 className="page-title">Todo App</h1>

            <div className="row">
               <div className="column small-centered small-11 medium-6 large-5">
                  <div className="container">
                     <TodoSearch onSearch={this.handleSearch} />
                     <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                     <AddTodo onAddTodo={this.handleAddTodo} />
                  </div>
               </div>
            </div>
         </div>
      );
   }
});

module.exports = TodoApp;
