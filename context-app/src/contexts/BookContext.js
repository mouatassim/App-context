import React,{ createContext,useState } from 'react'

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books,setBooks] = useState([
        {title:'Name of The wind',id:1},
        {title:'ألفية بن مالك',id:2},
        {title:'nos etoils contraires',id:3}
    ])
    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider >
    )
}

export default BookContextProvider
