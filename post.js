import React from 'react'

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
	  this.state = {
        post : "",
        comment : "",
        printcomment : ""
      };

  }
  show() {
  	console.log(this.state.post);
    let value =  localStorage.getItem('post');
    let p = JSON.parse(value); 
    console.log(p);
    let array = [];
    array.push(this.state.comment);
    if(p!=null) {
      p.map(function (v) {
        array.push(v);
      });
    }
    localStorage.setItem('post',JSON.stringify(array));
    console.log(array);
  }
  
  render() {
  	return (
      <div>
      <h2>This is my post.</h2>
      <form>
        <label>
           <textarea rows={2} placeholder='Write comments here....' 
           value = {this.state.comment} onChange={e => this.setState({comment: e.target.value })}/>
        </label>
        <p onClick= {this.show}>Comment</p>
      </form>
      <h2>{this.state.printcomment}</h2>
      </div>
  	);
  }
}
export default Post