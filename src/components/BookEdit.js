import { useState } from "react";

function BookEdit({ book,onEdit,handleSubmit}){

    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => { 
        setTitle(event.target.value);
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        onEdit(book.id, title);
        handleSubmit();

    };
    return <form onSubmit={handleOnSubmit}>
        <label >Edit Book title</label>
        <input type="text" className="input" onChange={handleChange} value= {title}/>
        <button className="button is-primaary" >Save</button>
    </form>
}
export default BookEdit;