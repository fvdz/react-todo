var React = require('react');

var TodoItem = React.createClass({
   render: function() {
      var { id, text, completed } = this.props;
      return (
         <div onClick={() => {
            this.props.handleToggle(id);
         }}>
            <input type="checkbox" checked={completed}/>
            { text }
         </div>
      );
   }
});

module.exports = TodoItem;
