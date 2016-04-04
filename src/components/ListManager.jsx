var React = require('react');
var List = require('./List2.jsx');

var ListManager = React.createClass({
  getInitialState:function () {  // this will call once at the first load
    return {
      items: [],
      newItemText: ''
    };
  },
  onChange: function (e) {
    this.setState({
      newItemText: e.target.value
    });
  },
  handleSubmit: function (e) {
    e.preventDefault();

    var currentItems = this.state.items;
    currentItems.push(this.state.newItemText);

    // React need to do this way for setup the items
    this.setState({ // 'setState' is the properties (Functions) of the 'React'
      items: currentItems,
      newItemText: ''
    });
  },
  render: function () {
    var divStyle = {
      marginTop: 10
    }
    return (
      <div style={divStyle}>
        <h3>{this.props.title}</h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.newItemText} />
          <button>Add</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
});

module.exports = ListManager;
