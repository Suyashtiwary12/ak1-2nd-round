const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='pagination'>
            {pages.map((page, index) => {
                return (
                    <div class="btn-group me-1" role="group" aria-label="Second group">
                        <button type="button" class={`btn btn-secondary ${page == currentPage ? "active" : ""}`}
                            key={index}
                            onClick={() => setCurrentPage(page)}>
                            {page} </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Pagination;