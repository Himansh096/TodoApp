import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Post from './Post'
import PageNumber from "./PageNumber"
function Pagenation() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(10)
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setPosts(response.data)
            console.log(response.data)
            setLoading(false)
        }
        fetchPosts()
    }, [])
    const paginate = (number) => { setCurrentPage(number) }
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)
    return (
        <div className="container mt-5">
            <Post posts={currentPost} loading={loading} />
            <PageNumber postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} />
        </div>
    )
}

export default Pagenation
