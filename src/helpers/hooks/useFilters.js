import {useState} from "react";
import {PAGE_SIZE} from "../../components/constants/constants.js";

export function useFilters(initialFilters) {

  const [filters, setFilters] = useState(initialFilters)


  const changeFilters = (key, value) => {
    setFilters(prev => {
      return {...prev, [key]: value}
    })
  }


  return {filters, changeFilters}
}