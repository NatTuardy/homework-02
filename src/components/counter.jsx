import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    const [imageUrl, setimageUrl] = useState("https://picsum.photos/200")
    const x = <h1>"null"</h1>
    const tags = ['tag1', 'tag2', 'tag3']
    const formCount = () => {
        return count === 0? "null": count
    }
    const getBageclasses = ()=> {
        let classes = 'badge m-2 bg-'
        classes += count === 0? 'danger': 'primary'
        return classes
    }
    const renderTags = () => {
      if(tags.length === 0) return 'tags are not found'
      return tags.map(tag => <li key={tag}>tag</li>)
    }
    const handleIncrement=(productId)=> {
      console.log(productId)
      setCount(count +1)
    }
    const handleDecrement=(productId)=> {
      if(count <= 0) return
      setCount(count -1)
    }
  return (
    <>
    {tags.length===0 && 'tags are not found'}
    {renderTags()}
      <span className={getBageclasses()}>{formCount()}</span>
      <button onClick={()=>handleIncrement({id:1})}className='btn btn-secondary btn-sm'>Increment</button>
      <button onClick={()=>handleDecrement({id:1})}className='btn btn-secondary btn-sm'>Decrement</button>
    </>
  );
};

export default Counter;
