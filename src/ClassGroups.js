import React,{useState} from "react"
import ClassGroupItem from "./ClassGroupItem";

function  ClassGroups(props) {
    const [inputName,setInputName] = useState("")
    const [inputCount,setInputCount] = useState(0)

    function handleFormSubmit(e) {
        e.preventDefault()
        
        fetch("http://localhost:3000/groups",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name:inputName,
                count: inputCount
            })
        })
        .then(res => res.json())
        .then(data => props.setData([...props.groups,data]))
    }
    
    return (
        <>
        <div>Groups</div>
        <ol>
            {props.groups.map(group => (
                <ClassGroupItem groupData= {group} key={group.name} />
            ))}
        </ol> 
        <form onSubmit={handleFormSubmit}>
            <input 
            placeholder="name" 
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            />
            <input 
            placeholder="count" 
            type="number"
            value={inputCount}
            onChange={(event) => setInputCount(event.target.value)}
            />
            <button>Add Group</button>
        </form>
        </>
    )
}

export default ClassGroups;