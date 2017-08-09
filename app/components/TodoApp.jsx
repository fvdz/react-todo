var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
   getInitialState: function () {
      return {
         todos: [
            { id: 1, text: 'Walk the dog' },
            { id: 2, text: 'Feed the cat' },
            { id: 3, text: 'Clean the yard' },
            { id: 4, text: 'Buy Milk' }
         ],
         showCompleted: false,
         searchText: ''
      };
   },
   handleAddTodo: function(text) {
      console.log(text);
   },
   handleSearch: function(showCompleted, searchText) {
      this.setState({
         showCompleted,
         searchText: searchText.toLowerCase()
      });
      console.log(showCompleted, searchText);
   },
   render: function(){
      var { todos } = this.state;
      return (
         <div>
            <TodoSearch onSearch={this.handleSearch} />
            <TodoList todos={todos} />
            <AddTodo onAddTodo={this.handleAddTodo} />
         </div>
      );
   }
});

module.exports = TodoApp;
