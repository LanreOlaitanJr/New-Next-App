"use client"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Create = () => {
    const [title, setTitle] = useState("");
    const  [body, setBody] = useState("");
    const  [author, setAuthor] = useState("");
    const successMessage = () => toast.success ("Blog created successfully")
    const errorMessage = () => toast.error ("Blog failed to create")
    
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!title || !author || !body){
            setError("Enter your detail")
        }else{
            setError("")
            setSuccess("Blog sent successfully")
        }


        const res = await fetch("/api/blogs", {
            method: "POST",
            header: {"Content-Type" : "application/json"},
            body: JSON.stringify({ title, author, body}),
        });
        if(res.ok){
            success()
        }
        else{
            errorMessage()
        }
    }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-purple-300 p-6">
        <form  onSubmit={handleSubmit}
          action=""
          className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full space-y-4"
        >
            {error && <p className="text-red-600">{error}</p>}
            {success && <p className="text-green-600">{success}</p>}
          <div>
            <label
              htmlFor="title"
              className="block text-gray-700 font-semibold mb-2"
            >
              Title
            </label>
            <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              type="text"
              name="title"
              id="title"
              placeholder="Enter your blog title"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="body"
              className="block text-gray-700 font-semibold mb-2"
            >
              Body
            </label>
            <textarea
              name="body"
              id="body"
                onChange={(e) => setBody(e.target.value)}
                value={body}
              placeholder="Enter blog content"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 h-40"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="author"
              className="block text-gray-700 font-semibold mb-2"
            >
              Author
            </label>
            <input
              type="text"
              name="author"
              id="author"
              onChange={(e) => setAuthor(e.target.value)}
                value={author}
              placeholder="Enter author's name"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-purple-900 text-white font-semibold rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Add Blog
          </button>
          <ToastContainer />
        </form>
      
      </div>
    </>
  );
};

export default Create;
