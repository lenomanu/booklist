import {useState} from 'react';

function BookCreate({onCreate}){
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value)

    };
    const handleSubmit = (event) =>{
        event.preventDefault();
        onCreate(title);
        setTitle('');
    };


    return <div className='book-create'>
        <form onSubmit={handleSubmit}>

            <h3>Add book</h3>
            <label htmlFor="">Book Title</label>
            <input className="input" type="text" placeHolder = 'Enter Book name' value={title} onChange = {handleChange}/>
            <button className="button">Submit</button>

        </form>
    </div>
}
export default BookCreate;
