import React from "react";
const SearchStatus = ( props )=> {
       const lastElement = (number) => {
        const newArray = String(number).split('')
        const lastElement = Number(newArray[newArray.length - 1])
        const someElement = [2, 3, 4].some((item) => item === lastElement)
        if (someElement && newArray.indexOf(String(lastElement)) === 0) {
            return 'человека'
        }
        if (someElement && Number(newArray[newArray.length - 2]) === 1) {
            return 'человек'
        }
        else {
            return 'человек'
        }
    }

return(
       <h1 className={'badge m-2 ' + (props.length === 0 ? 'bg-warning' : 'bg-primary')}>{props.length === 0
                ? 'Никто с тобой не тусанет'
                : `${props.length} ${lastElement(props.length)} тусанет с тобой сегодня`}</h1>  
)

}
export default SearchStatus