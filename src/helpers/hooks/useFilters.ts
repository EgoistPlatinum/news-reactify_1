import {useState} from "react";
import {IFilters} from "../../interfaces";

export function useFilters(initialFilters: IFilters) {

    const [filters, setFilters] = useState<IFilters>(initialFilters)


    const changeFilters = (key: string, value: number) => {
        setFilters(prev => {
            return {...prev, [key]: value}
        })
    }


    return {filters, changeFilters}
}