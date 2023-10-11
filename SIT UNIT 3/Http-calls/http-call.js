import React, { Component } from 'react';

class HttpExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      newPost: {
        title: '',
        body: '',
      },
    };
  }

  componentDidMount() {
    // Make a GET request to fetch data when the component mounts
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => this.setState({ data }))
      .catch((error) => console.error('Error fetching data:', error));
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newPost: {
        ...prevState.newPost,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to send new data
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.newPost),
    })
      .then((response) => response.json())
      .then((postedData) => {
        this.setState((prevState) => ({
          data: [...prevState.data, postedData],
          newPost: { title: '', body: '' },
        }));
      })
      .catch((error) => console.error('Error posting data:', error));
  };

  render() {
    const { data, newPost } = this.state;

    return (
      <div>
        <h1>HTTP Requests Example</h1>
        <h2>Posts</h2>
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
        <h2>Add a New Post</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={newPost.title}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Body:</label>
            <textarea
              name="body"
              value={newPost.body}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default HttpExample;
