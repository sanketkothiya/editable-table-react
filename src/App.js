
import { nanoid } from "nanoid";
import './App.css';
import React, { Fragment, useState } from "react";
// import data from './mock-data.json';
import './css/form.css'
import Read from './component/Read';
import Edit from "./component/Edit";



function App() {

  const [contacts, setContacts] = useState([]);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    email: "",
    gender: '',
    status: '',
    bdate: '',
    hobby: ''

  });
  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      email: addFormData.email,
      gender: addFormData.gender,
      status: addFormData.status,
      bdate: addFormData.bdate,
      hobby: addFormData.hobby
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);


  };
  return (
    <div>
      <h2>Add Contacts here</h2>
      <div className="container">
        <fieldset className="scheduler-border">
          <legend className="scheduler-border"> <marquee width="60%" direction="up" height="50px" >Employee data</marquee> </legend>
          <form onSubmit={handleAddFormSubmit}>
            <input
              className="form-data"
              type="text"
              name="fullName"
              required="required"
              placeholder="Enter a name..."
              onChange={handleAddFormChange}
            />
            <input
              className="form-data"
              type="email"
              name="email"
              required="required"
              placeholder="Enter an email..."
              onChange={handleAddFormChange}

            />
            <input
              className="form-data ml-3"
              type="password" name="password1"
              required="required"
              placeholder="Enter a your password..."

            />
            <input
              className="form-data"
              type="password"
              name="password2"
              required="required"
              placeholder="confirm  password..."

            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label className="form-data" htmlFor="cars">Choose a Hobby:-</label>

            <select className="form-data" id="cars" name="hobby" onChange={handleAddFormChange}>
              <option value="Singing">Singing</option>
              <option value="Sport">Sport</option>
              <option value="swimming">swimming</option>
              <option value="Traveling">Traveling</option>


            </select>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label className="form-data" htmlFor="cars">Choose a DOB:-</label>
            <input
              className="form-data"
              type="date"
              name="bdate"
              required="required"
              placeholder="enter data"
              onChange={handleAddFormChange}

            />

            <div className="gender">
              <label htmlhtmlFor=""> Gender:-</label>
              <input type="radio" id="male" name="gender" value="Male" onChange={handleAddFormChange} />
              &nbsp;&nbsp;
              <label htmlFor="html">Male</label>
              &nbsp;&nbsp;
              <input type="radio" id="female" name="gender" value="Female" onChange={handleAddFormChange} />
              &nbsp;&nbsp;
              <label htmlFor="female">Female</label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label htmlFor="authentication"> Status</label>
              &nbsp;&nbsp;
              <input type="checkbox" id="status" name="status" value='Active' onChange={handleAddFormChange} />
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <button className="btnstyle btn btn-primary" type="submit" lassName="form-data">Add</button>


          </form>

        </fieldset>

      </div>

      <h1>result</h1>
      <div  >
        <form >
          <table >
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Hobby</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((contact) => (
                <Fragment>
                  {editContactId == contact.id ? (< Edit />)
                    : (<Read contact={contact} handleEditClick={handleEditClick} />)
                  }



                </Fragment>

              ))}
            </tbody>
          </table>
        </form>
      </div>

    </div>
  )
}

export default App;