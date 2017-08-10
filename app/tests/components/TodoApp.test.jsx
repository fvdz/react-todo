var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {

   it('should exists', () => {
      expect(TodoApp).toExist();
   });

   it('should increment todos state with one todo item on handleAddTodo', () => {
      var todoText = 'test text';
      var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

      todoApp.setState({ todos: [] });
      todoApp.handleAddTodo(todoText);

      expect(todoApp.state.todos[0].text).toBe(todoText);
   });

   it('should toggle completed value when handleToggle is called', () => {
      var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
      var id = todoApp.state.todos[0].id;
      var completed = todoApp.state.todos[0].completed;

      todoApp.handleToggle(id);

      expect(todoApp.state.todos[0].completed).toNotBe(completed);
   });

});
