import React from 'react'
import "./Instapost.css"
function Instapost({ post }) {

    return (
        <li className="postcard">
            <h4 >{post.author}</h4>
            <img src={post.download_url} src={post.download_url}></img>
        </li>
    )
}

export default Instapost
