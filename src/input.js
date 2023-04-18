import { useEffect, useState } from "react"; 
import axios from "axios";


const Input = () => {
    const blogs = [ ];
    const [title, setTitle] = useState(' ');
    const [body, setBody] = useState(' ');
    const [author, setAuthor] = useState(' ');
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body };
        fetch(' http://localhost:8000/blogs', {
            method: 'POST',
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(blog)
        }).then((res) => {
            console.log("completed sheets")
        }).catch((err) => {
            console.log("uncompleted sheets")
        })
    }
    return (
        <>
            <div className=" h-1/2 bg-white rounded-lg w-18 flex flex-col justify-center items-center">
                <p className="text-black py-3">SIGN-UP</p>
            <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between items-start px-4 text-black py-3">
                <label className="text-lg">Blog title:</label>
                <input
                    type='text'
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='rounded border-2  border-black'
                />
                <label className="text-lg">Blog body:</label>
                    <input
                    type='text'
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className='border-2 rounded border-black'
                    />
                    <button onSubmit={()=>{handleSubmit()}} className="bg-blue-500 px-4 py-2 text-lg text-black rounded-md">Join now</button>
            </form>
            
            </div>
            <p className="h-16">{title}</p>
            <p className="h-1">{ body}</p>
            </>
    )
}
export default Input;