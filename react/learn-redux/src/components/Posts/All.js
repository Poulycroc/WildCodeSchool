import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PostAll extends Component {
  postsRender() {
    const { posts } = this.props;
    if (posts.length === 0) return <p>Pas d'article</p>;
    return posts.map(post => {
      return (
        <div className="base" key={post.id}>
          <Link to={"/" + post.id}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.body}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="home-page">
        <h1>Post page</h1>
        {this.postsRender()}
      </div>
    );
  }
}

const mapStateToPost = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToPost)(PostAll);
