import PaginationButton from '../PaginationButton/PaginationButton.tsx'
import React from 'react'
import { IPaginationProps } from '../../model/types.ts'

interface Props {
  top?: boolean
  bottom?: boolean
  children: React.ReactNode
}

const Pagination = (props: Props & IPaginationProps) => {
  const { top, bottom, children, ...paginationProps } = props

  return (
    <>
      {top && <PaginationButton {...paginationProps} />}

      {children}

      {bottom && <PaginationButton {...paginationProps} />}
    </>
  )
}

export default Pagination
