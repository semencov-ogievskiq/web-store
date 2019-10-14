import React from "react";
import { connect } from "react-redux";

class Test extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    
    console.log(props);
    this.state = this.props.user.user;
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.dispatch({type:"AUTH"});
    console.log(this.props)
  };

  render() {
    return (
      <div style={{marginTop:"100px"}}>
        <h1 >!{this.props.user.user.login}</h1>
        <input 
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

const authfdf = ()=>({
    type: "AUTH",
    payload:{}
});

const mapStateToProps = state=>{ 
  var user = state.user
    return {user: user}
}

export default connect(
    mapStateToProps,
    null 
)(Test);
// export default AddTodo;
