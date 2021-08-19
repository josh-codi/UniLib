import React from 'react'

const Search = () => {
    const style={
        margin: "10px",
        width:"fit-content",
        display: "flex",
        borderRadius:"6px",
        boxShadow:"0px 0px 4px rgb(0,0,0,.5)"
    }
    const input={
        borderTopRightRadius:"6px",
        borderBottomRightRadius:"6px",
        outline: "none",
        border:"none"
    }
    const button={
        outline:"none",
        padding:"6px",
        background:"none",
        border:"none",
        borderTopLeftRadius:"6px",
        borderBottomLeftRadius:"6px"
    }
    return (
        <div style={style}>
            <button style={button} type="button"><i className="search"></i>Search</button>
            <input style={input} type="text" placeholder="Search"/>
        </div>
    )
}

export default Search
