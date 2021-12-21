import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault()
    console.log(this.state)
    axios
    .post("https://jsonplaceholder.typicode.com/posts", this.state)
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
  }

  render() {
    const { userId, title, body } = this.state;
    return (
      <div className="text-center mt-10">
        <h2 className="text-3xl">Enter the details</h2>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              className="border-2"
              type="text"
              name="userId"
              placeholder="User Id"
              value={userId}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              className="border-2"
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              className="border-2"
              type="text"
              name="body"
              placeholder="Body"
              value={body}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
