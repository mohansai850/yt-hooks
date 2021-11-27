import React, { useState } from 'react'

const SearchBar = ({onappSubmit}) => {
    const[term, setTerm] = useState('')
    const onFormSubmit = e => {
        e.preventDefault();
        onappSubmit(term);
    }
    
    return(
        <div className="ui segment searchbar">
            <form  className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                <label>VideoSearch</label>
                <input type="text" onChange={e => setTerm(e.target.value)} value={term}/>
                <input type="submit" value="Search" className="ui submit button"/>
                </div>
            </form>
        </div>  
    )
}

export default SearchBar;
