import React,{useState} from 'react';

const ClassGroupItem = ({groupData,groups,setData}) => {
    const [comment,setComment] = useState("")
    
    function handleSubmit(e) {
        e.preventDefault()
        console.log(comment)
        alert(comment)
    }
    function handleDelete() {
        fetch(`http://localhost:3000/groups/${groupData.id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            let remaining = groups.filter(group => group.id !== groupData.id)
            setData(remaining)
        })
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
            <button onClick={handleDelete}>Delete Group</button>
            
        </div>
    )
}

export default ClassGroupItem