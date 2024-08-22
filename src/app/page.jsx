import Link from 'next/link'
import React from 'react'


const Home = () => {
  return (
    <>
      <div classname="flex justify-between items-center">
        <h1>Welcome to my blog</h1>
        <Link href="/blog/create" classname="ring rounded-sm py-2 px-4">Add New Blog</Link>
      </div>
    </>
  )
}

export default Home
