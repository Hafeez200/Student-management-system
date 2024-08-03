import './App.css'
import StudentList from './component/StudentList'
import StudentName from './component/StudentName'
import { collection,getDoc } from 'firebase/firestore'
import { useEffect, useState } from "react"

function App() {
  const getStudents = async() =>{
    const studentSnapshot = await getDocs(studentCollection)
    const studentList =  studentSnapshot.docs.map(doc =>( {
     
         id: doc.id,
         ...doc.data()
 }));
 setStudent(studentList)
 
   }
  return (
    <div className='app-container'>
      <h1 className='heading-title'>Student Managment System</h1>
      <StudentName/>
      <StudentList/>
    </div>
  )
}

export default App