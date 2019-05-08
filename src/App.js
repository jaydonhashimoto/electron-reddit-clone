import React, { Component } from 'react';
import {
  ListGroup, ListGroupItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios
      .get("https://reddit.com/r/aww.json")
      .then(res => {
        this.setState({ posts: res.data.data.children });
      })
      .catch(err => {
        console.log(err);
      })
  }

  showImage = () => {
    // ipcRenderer.send('toggle-image')
  }

  render() {
    return (
      <div className="App">
        <ListGroup>
          {this.state.posts.map(post =>
            <Link
              to={{
                pathname: "/post",
                state: { post }
              }}
              key={post.data.id}

            >
              <ListGroupItem
                key={post.data.id}
                style={itemStyle}
              >
                <img style={thumbnailStyle} src={post.data.thumbnail} alt="thumbnail" />
                {post.data.title}
              </ListGroupItem>
            </Link>

          )}
        </ListGroup>
      </div>
    );
  }
}

const itemStyle = {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
}

const thumbnailStyle = {
  width: '60px',
  height: '60px',
  borderRadius: '30px',
  marginRight: '16px'
}

export default App;
