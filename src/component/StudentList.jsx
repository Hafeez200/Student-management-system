import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../../firebase";


function StudentList() {
 const [student, setStudent] = useState([]);
  const studentCollection = collection(db, 'students')

  



  useEffect(()=>{
      getStudents()
  },[student]);



  return (
    <>
      <h1>Students List</h1>
    <div className="students-list">
      {student && student.map((studentName)=>(
        <div key={studentName.id} className="student">
            <h2>{studentName.name}</h2>
            <p>{studentName.age}</p>
        </div>  
    ))}
    </div>
    </>
  )
}

export default StudentList