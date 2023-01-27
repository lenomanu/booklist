import React from "react";
import {useState} from 'react';
import BookEdit from "./BookEdit";

function BookShow({book, onDelete, onEdit}){
    const [showEdit, setShowEdit] = useState(false);
    const handleSubmit =()=>{
        setShowEdit(!showEdit);

    }

    const handleDeleteClick = ()=>{
        onDelete(book.id);
    };
    const handleEditClick = ()=>{
        setShowEdit(!showEdit);
    };

    let content = book.title;
    if(showEdit){
        content = <BookEdit book = {book} onEdit = {onEdit} handleSubmit ={handleSubmit}/>;
    };

    return <div className="book-show" > 
        <img src={`https://picsum.photos/id/${book.id}/300/200`} alt="Books" />
    
    {content}
        <div className="actions">
            <button onClick={handleEditClick}>Edit</button>
            <button className="delete" onClick={handleDeleteClick} >X</button>
        </div>
     </div>;
}

export default BookShow;