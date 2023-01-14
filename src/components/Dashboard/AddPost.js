import React from 'react'
import './addPost.css'

const AddPost = () => {
  return (
    <div className='container add-post w-100 bg-white mb-sm'>
          <form className='dashboard-container flex flex-col gap-2'>
            <div className='add-post-fields flex flex-col gap-1'>
                <label>Post Title</label>
                <input className='' />
            </div>

            <div className='add-post-fields flex flex-col gap-1'>
                <label>Post Title</label>
                <select>
                   <option>
                    helo
                   </option>
                   <option>
                    helo
                   </option>
                </select>
            </div>
            <div className='add-post-fields flex flex-col gap-1'>
                <label>Post Title</label>
                <select>
                   <option>
                    Yes
                   </option>
                   <option>
                    No
                   </option>
                </select>
            </div>
            <div className='add-post-fields flex flex-col gap-1'>
                <label>Post Title</label>
                <textarea />
            </div>
            <div className='add-post-fields flex flex-col gap-1'>
                <label>Post Title</label>
                <input className='' />
            </div>
            
            </form>
    </div>
  )
}

export default AddPost