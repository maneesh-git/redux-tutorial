import React,{ useEffect } from 'react';
import { connect } from 'react-redux'; 
// connect is HOF that connects a redux store to a react component.

import { fetchPosts } from  '../actions/postsActions';

import { Post } from '../components/Post';

// Now we have the Redux state in the props of the component
const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {

    useEffect(() => {
        dispatch(fetchPosts())
    },[dispatch])


    // Showing loading, hasErrors or the posts fetched
    const renderPosts = () => {

        if(loading) return <p>Loading posts...  </p>

        if(hasErrors) return <p>Unable to display posts.</p>

        return posts.map(post => <Post key={post.id} post={post} />)
    }

    return(
        <section>
            <h1>Posts</h1>
            { renderPosts() }
        </section>
    )
}

// maps the redux state to the props of react component
const mapStateToProps = state => ({
    loading : state.posts.loading,
    posts : state.posts.posts,
    hasErrors : state.posts.hasErrors
})

// connect Redux to react
export default connect(mapStateToProps)(PostsPage);