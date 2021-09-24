// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import useInfiniteQuery from "react-query"
// import Instapost from './Instapost'
// import InfiniteScroll from 'react-infinite-scroll-component';
// function Instagram() {

//     // const fetchPosts = async ({ pageParam = 1 }) => {
//     //     const response = await fetch(`https://picsum.photos/v2/list?page=${pageParam}&limit=10`)
//     //     console.log(response.data)
//     // }
//     const fetchPosts = async ({ pageParam = 1 }) => {
//         const response = await fetch(
//             `https://picsum.photos/v2/list?page=${pageParam}&limit=10`
//         );
//         const results = await response.json();
//         return { results, nextPage: pageParam + 1, totalPages: 100 };
//     };
//     const { data, isLoading, isError, hasNextPage, fetchNextPage } =
//         useInfiniteQuery("posts", fetchPosts, {
//             getNextPageParam: (lastPage, pages) => {
//                 if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
//                 return undefined;
//             },
//         });


//     // const [list, setList] = useState([]);
//     // const fetchPosts = async ({ pageParam = 1 }) => {
//     //     const response = await fetch(`https://picsum.photos/v2/list?page=${pageParam}&limit=10`)
//     //     console.log(response.data)
//     // }
//     // useEffect(() => { return fetchPosts() }, [fetchPosts])


//     // useEffect(() => {
//     //     const fetchPosts = async ({ pageParam = 1 }) => {
//     //         // try {
//     //         const response = await fetch(`https://picsum.photos/v2/list?page=${pageParam}&limit=10`);
//     //         const results = await response.json();
//     //         setList(results);
//     //         // } catch (error) {
//     //         //     console.log("error", error);
//     //         // }
//     //         return { results, nextPage: pageParam + 1, totalPages: 100 };
//     //     };

//     //     fetchPosts();
//     // }, []);
//     // console.log(list)

//     return (
//         <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
//             {data.pages.map((page) =>
//                 page.results.map((post) => <Instapost key={post.id} post={post} />)
//             )}
//         </InfiniteScroll>
//     )
// }


// export default Instagram







import InfiniteScroll from 'react-infinite-scroll-component';
import { useInfiniteQuery } from "react-query";
import Instapost from './Instapost'
export default function Instagram() {
    const fetchPosts = async ({ pageParam = 1 }) => {
        const response = await fetch(
            `https://picsum.photos/v2/list?page=${pageParam}&limit=10`
        );
        const results = await response.json();
        return { results, nextPage: pageParam + 1, totalPages: 100 };
    };
    const {
        data,
        isLoading,
        isError,
        hasNextPage,
        fetchNextPage
    } = useInfiniteQuery("posts", fetchPosts, {
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
            return undefined;
        }
    });
    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : isError ? (
                <p>There was an error</p>
            ) : (
                <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
                    {data.pages.map((page) =>
                        page.results.map((post) => <Instapost key={post.id} post={post} />)
                    )}
                </InfiniteScroll>
            )}

        </div>

    );
}
