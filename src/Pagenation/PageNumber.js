import React from 'react'

function PageNumber({ postPerPage, totalPosts, paginate }) {

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul>
                {pageNumbers.map(pageNumber => (<li key={pageNumber} className="page-item"><a onClick={() => paginate(pageNumber)} href={`#${pageNumber}`} className="page-link">{pageNumber}</a></li>))}
            </ul>

        </nav>
    )
}

export default PageNumber
