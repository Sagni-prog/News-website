import { React,useState } from 'react'
import './addPost.css'

const AddPost = () => {

  const [text, setText] = useState("");
  const [textCode, setTextCode] = useState("");
  const [code, setCode] =useState();

  let txt = ``; 


  const handleEnter = (e) => {
     if(e.key === 'Shift+p'){
      console.log("Ctrl key pressed")
     }
     else{
      console.log("not Ctrl key")
     }
  } 

  const handleSubmit = (e) => {

    localStorage.setItem("text",JSON.stringify(text))
    let list = []; 
   
    e.preventDefault();
    let t = text.split("\n")

   for(let i = 0; i < t.length; i ++){
      txt = txt +
      `<p class = "word-break font-18 font-montserrar">${t[i]}</p>` 
      
      let p = t[i].split(" ");
      let s = t[i].split("  ")
      console.log(p)
      console.log(s[1])
    }
        
      setCode(`<div>${txt}</div>`)

      console.log(code)
  }

  return (
    <div className='container add-post w-100 bg-white mb-sm'>
      <div className='pre-wrap'>
        <p className='font-montserrat font-16'>
           {JSON.parse(localStorage.getItem("text"))}
           </p>
      </div>
      {/* <div><div dangerouslySetInnerHTML={{__html: code}} /></div> */}
          <form onSubmit= { (e) => handleSubmit(e) } className='dashboard-container flex flex-col gap-2'>
            <div className='add-post-fields flex flex-col gap-1'>
                <label>Post Title</label>
                <input className='' />
            </div>

            <div className='add-post-fields flex flex-col gap-1'>
                <label>Subcatagory</label>
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
                <label>Commentable</label>
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
                <label>Post Detail</label>
                <textarea 
                   onChange={ e => setText(e.target.value) }
                   onKeyPress = {e => handleEnter(e)} 
                 />
            </div>
            <div className='add-post-fields flex flex-col gap-1'>
                <label>Tags</label>
                <input className='' />
            </div>

            <button type='submit'>Submit</button>
            
            </form>
    </div>
  )
}

export default AddPost