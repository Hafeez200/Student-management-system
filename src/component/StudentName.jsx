import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../firebase";


function StudentName() {
    const [ rollNo, setrollNo]=useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [isCreatingStudent, setIsCreatingStudent] = useState(false)

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            setIsCreatingStudent(true)
            await addDoc(collection(db, 'students'),{
                rollNo: Number(rollNo),
                name: name,
                age: Number(age),
            })
            setrollNo('')
            setName("")
            setAge('')
            setIsCreatingStudent(false)
            
        } catch (error) {
            console.log("Error Creating user:", error)
            setIsCreatingStudent(false)
        }
    }
  return (
    <form onSubmit={handleSubmit} className="form">
        <input type="number" value={rollNo} onChange={(e)=> setrollNo(e.target.value)}  placeholder="Enter Student RollNo"/>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}  placeholder="Enter Student Name"/>
        <input type="text" value={age} onChange={(e)=> setAge(e.target.value)} placeholder="Enter Student Age" />
        <button type="submit" >{isCreatingStudent ? 'Creating...' : 'Create Student'}</button>
    </form>
  )
}

export default StudentName