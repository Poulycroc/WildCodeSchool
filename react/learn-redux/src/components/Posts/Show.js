import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PostShow extends Component {
  postRender() {
    // console.log({ props: this.props });
    const { post } = this.props;
    if (!post) return <p>L'article n'existe pas</p>;
    return (
      <div className={"post-" + post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    );
  }

  render() {
    return (
      <div className="post-page">
        <Link to="/">Retour aux posts</Link>
        {this.postRender()}
      </div>
    );
  }
}

const mapStateToPost = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.post_id);
  return {
    post: state.posts.find(post => post.id === id)
  };
};

export default connect(mapStateToPost)(PostShow);
