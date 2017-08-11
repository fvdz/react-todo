var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

   beforeEach(() => {
      localStorage.removeItem('todos');
   });

   it('should exists', () => {
      expect(TodoAPI).toExist();
   })

   describe('setTodos', () => {

      it('should set valid todos array', () => {
         var todos = [
            {  id: 23,
               text: 'test all files',
               completed: false
            }
         ];
         TodoAPI.setTodos(todos);

         var actualTodos = JSON.parse(localStorage.getItem('todos'));

         expect(actualTodos).toEqual(todos);
      });

      it('should fail if passed invalid todos array', () => {
         var todos = 'not an array';
         TodoAPI.setTodos(todos);

         expect(localStorage.getItem('todos')).toBe(null);
      });

   })

   describe('getTodos', () => {

      it('should return a empty array for bad localstorage data', () => {
         var actualTodos = TodoAPI.getTodos('todos');
         expect(actualTodos).toEqual([]);
      });

      it('should return a valid string when getTodos is called', () => {
         var validData = [
            {
               id: 33,
               text: 'valid text',
               completed: true
            }
         ];
         localStorage.setItem('todos', JSON.stringify(validData));
         var actualTodos = TodoAPI.getTodos('todos');

         expect(actualTodos).toEqual(validData);
      });

   });

});
