export interface IPaginationProps {
  totalPages: number
  handlePageClick: (page: number) => void
  handleNextPage: () => void
  handlePreviousPage: () => void
  currentPage: number
}
