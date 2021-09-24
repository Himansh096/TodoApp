import React from 'react'

function Post({ posts, loading }) {
    if (loading) {
        return <h2>Loading...</h2>
    }
    console.log(posts)
    return (
        <ul className="list-group mb-4">
            {posts.map((post) => <li key={post.id} className="list-group-item">{post.title}</li>)}
        </ul>
    )
}

export default Post
