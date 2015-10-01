var data = [
  {author: "Pete Hunt", text: "akjsljmla;ksjdml;aksjdaslkmd is one comment"},
  {author: "Jordan Walke", text: "This is *another* commenasldjaslkdjasolkdnt"}
];


var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div>
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});


var Comment = React.createClass({
  rawMarkup: function() {
    console.log(this.props)
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },
  
  render: function() {
    return (
      <div>
        <h2>
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

var CommentBox = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Comments</h1>
        <CommentList data={this.props.data}/>
        <CommentForm />
      </div>
    );
  }
});

React.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);