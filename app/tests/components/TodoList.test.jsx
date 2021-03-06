var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var TodoItem = require('TodoItem');

describe('TodoList', () => {

   it('should exists', () => {
      expect(TodoList).toExist();
   });

   it('should render one Todo component for each todo item', () => {
      var todos = [
         { id: 1, text: 'something' },
         { id: 2, text: 'something else' }
      ];
      var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
      var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, TodoItem);

      expect(todosComponents.length).toBe(todos.length);
   });
});
