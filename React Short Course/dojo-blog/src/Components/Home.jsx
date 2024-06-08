import React, { useState } from 'react'

function Home() {
  const [blogs, setBlogs]=useState([
    {title: "My new Website", body: "Lorem Ipsum", author: "Mario", id: 1},
    {title: "Welcome Party", body: "Lorem Ipsum", author: "Yoshi", id: 2},
    {title: "Web Dev Top Tips", body: "Lorem Ipsum", author: "Luigi", id: 3}
  ])

  return (
    <div className='home'>
      {blogs.map((blog)=>(
        <div className='blogPreview' key={blog.id}>
        <h2>{blog.title}</h2>
        <p>{blog.author}</p>
      </div>
      ))}
    </div>
  )
}

export default Home
