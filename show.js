import React from 'react'

class ShowComments extends React.Component {
  render() {
	let comment = JSON.parse(localStorage.getItem('post'));
    let element = comment.map(item => {
      return (
        <div>
          <ul>
            <li>{item}</li>
          </ul>
        </div>
      );
    })
    return <div>{element}</div>
  }
}
export default ShowComments