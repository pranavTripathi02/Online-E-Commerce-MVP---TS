import React from 'react';
import './pagination.css'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import usePagination, { DOTS } from '../hooks/usePagination';

const Pagination = (props: any) => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || !paginationRange || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange?.length - 1];

    return (
        <ul
            className='pagination-container'
        >
            {/* Left navigation arrow */}
            <li
                className={`pagination-item 
                    ${currentPage === 1 ? 'disabled' : ''}
                `}
                onClick={onPrevious}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </li>
            {paginationRange.map(pageNumber => {
                // console.log(pageNumber);
                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === DOTS) {
                    return <li className="pagination-item dots">...</li>;
                }

                // Render our Page Pills
                return (
                    <li
                        className={`pagination-item
                            ${pageNumber === currentPage ? 'selected' : ''}
                        `}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            {/*  Right Navigation arrow */}
            <li
                className={`pagination-item
                    ${currentPage === lastPage ? 'disabled' : ''}
                `}
                onClick={onNext}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </li>
        </ul>
    );
};

export default Pagination;

