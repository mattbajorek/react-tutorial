// tutorial1.js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
      /* Compiles to --> 
      React.createElement('div', {className: "commentBox"},
        "Hello, world! I am a CommentBox."*/
    );
  }
});

ReactDOM.render(
  <CommentBox />, // Compiles to --> React.createElement(CommentBox, null),
  document.getElementById('content')
);