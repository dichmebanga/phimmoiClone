// import { useState } from 'react';
// import ReactPaginate from 'react-paginate';
// import './hook.modue.scss';
// import { useNavigate } from 'react-router-dom';

// function usePagination(data, itemsPerPage, searchQuery) {
//     const [currentPage, setCurrentPage] = useState(0);
//     const navigate = useNavigate();
//     const handlePageClick = ({ selected: selectedPage }) => {
//         setCurrentPage(selectedPage);
//     };
//     console.log('currentPage', currentPage);
//     const pageCount = Math.ceil(data.length / itemsPerPage);
//     const paginationData = data.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
//     const paginationUI = (
//         <ReactPaginate
//             previousLabel={'Trước'}
//             nextLabel={'Sau'}
//             pageCount={pageCount}
//             pageRangeDisplayed={2}
//             marginPagesDisplayed={2}
//             onPageChange={handlePageClick}
//             containerClassName={'pagination-container'}
//             previousLinkClassName={'pagination-page'}
//             nextLinkClassName={'pagination-page'}
//             pageClassName={'pagination-page'}
//             disabledClassName={'pagination-disabled'}
//             activeClassName={'pagination-active'}
//         />
//     );

//     return [paginationData, paginationUI];
// }

// export default usePagination;

import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.modue.scss';

function Pagination({ data, itemsPerPage, onChange }) {
    const [currentPage, setCurrentPage] = useState(0);
    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
    };

    useEffect(() => {
        onChange(currentPage + 1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]);
    const pageCount = Math.ceil(data / itemsPerPage);

    return (
        <ReactPaginate
            previousLabel={'Trước'}
            nextLabel={'Sau'}
            pageCount={pageCount}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={'pagination-container'}
            previousLinkClassName={'pagination-page'}
            nextLinkClassName={'pagination-page'}
            pageClassName={'pagination-page'}
            disabledClassName={'pagination-disabled'}
            activeClassName={'pagination-active'}
        />
    );
}

export default Pagination;
