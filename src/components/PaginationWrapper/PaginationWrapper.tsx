import Pagination from "../Pagination/Pagination.tsx";
import React from "react";
import {IPaginationProps} from "../../interfaces";

interface Props {
  top?: boolean
  bottom?: boolean
  children: React.ReactNode
}


const PaginationWrapper = (props: Props & IPaginationProps) => {

  const {top, bottom, children, ...paginationProps} = props

  return (
    <>
      {top && <Pagination {...paginationProps}/>}

      {children}

      {bottom && <Pagination {...paginationProps}/>}
    </>
  )
}

export default PaginationWrapper