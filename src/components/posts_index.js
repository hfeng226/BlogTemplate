import React, {Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component{
	componentWillMount() {
		console.log("this would be a good time to action creator to fetch posts");
		this.props.fetchPosts();

	}
	renderPosts(){
		return this.props.posts.map((post) => {
			return(
				<li className="list-group-item" key={post.id}>
				<Link to={"posts/" + post.id}>
				<span className="pull-xs-right">Categories: {post.categories}</span>
				<strong>Title: {post.title}</strong>
				</Link>
				</li>
				);
		});
	}

	render(){
		return (
			<div className="container">
			
			<h3>Blog Posts</h3>
			<ul className="list-group">
				{this.renderPosts()}
			</ul>
			
			<div className="text-xs-right">
				<Link to="/posts/new" className="btn btn-primary">
				Add a Post
				</Link>
			
			</div>
			</div>
			);
	
	}
}

function mapStateToProps(state){
	return { posts: state.posts.all};
}


export default connect (mapStateToProps, { fetchPosts })(PostsIndex);