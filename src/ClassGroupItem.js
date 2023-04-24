import React,{useState} from 'react';

const ClassGroupItem = ({groupData}) => {
    const [comment,setComment] = useState("")
    
    function handleSubmit(e) {
        e.preventDefault()
        console.log(comment)
        alert(comment)
    }
    
    return (
        <div>
            <ul>
            <li key={groupData.name}>
                    {groupData.name} and we are {groupData.count}  
                </li>
            </ul>
            <button onClick={() => alert("We are done!")}>Done</button>
            <form onSubmit={handleSubmit}>
                <input
                 placeholder='comment' 
                 value={comment} 
                 onChange={(e) => setComment(e.target.value)} />
            </form>
            
        </div>
    )
}

export default ClassGroupItem