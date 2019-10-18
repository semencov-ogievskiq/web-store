import React from "react";
import { connect } from "react-redux";
import { async } from "q";

function Test(props){
  
  const handleAddTodo = async () => {
    await props.dispatch({type:"SIGN_IN"});
    console.log(props)
  };

    return (
      <div style={{marginTop:"100px"}}>
        <h1 >!{props.user.user.login}</h1>

        <button className="add-todo" onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  
}

const authfdf = ()=>({
    type: "SIGN_IN",
    payload:{}
});

const mapStateToProps = state=>{ 
  var client = state.client
    return {user: client}
}

export default connect(
    mapStateToProps,
    null 
)(Test);
// export default AddTodo;
