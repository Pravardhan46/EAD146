import React, { useState} from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [name, setStudentName] = useState("");
  const [roll_no, setRollNo] = useState("");
  const [branch, setBranch] = useState("");
  const [email, setEmail] = useState("");
  const [isCurrentStudent,setisCurrentStudent ] = useState("");
  const submitReview = () => {
    Axios.post("http://localhost:9000/routes", {
      name:name,
      roll_no:roll_no,
      branch:branch,
      email:email,
      isCurrentStudent:isCurrentStudent
    }).then(() => {
      alert("success");
    });
  };
  return (
    <div className="App">
      <h1>CRUD Application Demo</h1>
      <div className="information">
        <label>
          <b>Student Name</b>
        </label>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setStudentName(e.target.value);
          }}
          required
        />
        <label>
          <b>Roll No</b>
        </label>
        <input
          type="text"
          name="roll_no"
          onChange={(e) => {
            setRollNo(e.target.value);
          }}
          required
        />
        <label>
          <b>Branch</b>
        </label>
        <input
          type="text"
          name="branch"
          onChange={(e) => {
            setBranch(e.target.value);
          }}
          required
        />
        <label>
          <b>email</b>
        </label>
        <input
          type="text"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />

       <label>
          <b>isCurrentStudent</b>
        </label>
        <input
          type="text"
          name="isCurrentStudent"
          onChange={(e) => {
            setisCurrentStudent(e.target.value);
          }}
          required
        />
        <button onClick={submitReview}>
          <b>Submit</b>
        </button>
      </div>
    </div>
  );
}
export default App;
