var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoItem = require('TodoItem');

describe('TodoItem', () => {

   it('should exists', () => {
      expect(TodoItem).toExist();
   });

   it('should call onToggle prop with id on click', () => {
      var todoData = {
         id: 199,
         text: 'test with todoitem',
         completed: true
      };
      var spy = expect.createSpy();
      var todoItem = TestUtils.renderIntoDocument(<TodoItem {...todoData} onToggle={spy}/>);
      var $el = $(ReactDOM.findDOMNode(todoItem));

      TestUtils.Simulate.click($el[0]);

      expect(spy).toHaveBeenCalledWith(199);
   });


});
