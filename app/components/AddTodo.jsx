var React = require('react');

var AddTodo = React.createClass({
   handleSubmit: function(e) {
      e.preventDefault();
      var { value } = this.refs.todoText;
      if ( value.length > 0 ) {
         this.refs.todoText.value = '';
         this.props.onAddTodo(value);
      } else {
         this.refs.todoText.focus();
      }
   },
   render: function() {
      return (
         <div>
            <form onSubmit={this.handleSubmit}>
               <input
                  type="text"
                  ref="todoText"
                  placeholder="What do you need to do?"
                  className="expanded hollow"
               />
               <button className="button expanded">Add Todo</button>
            </form>
         </div>
      );
   }
});

module.exports = AddTodo;
