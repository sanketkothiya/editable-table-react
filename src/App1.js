import { nanoid } from "nanoid";
import './App.css';
import "./css/form.css"
import React, { useState } from "react";


function App() {
  const [contacts, setContacts] = useState();
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    email: "",

  });

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
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
  return (
    <div className="">
      <h1>hello</h1>
      <h2>Add Contacts here</h2>
      <div className="container">
        <fieldset>
          <legend>Personalia:</legend>
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
              className="form-data"
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
            <label className="form-data" htmlFor="cars">Choose a Hobby:</label>

            <select className="form-data" id="cars">
              <option value="volvo">Singing</option>
              <option value="saab">watching</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label className="form-data" htmlFor="cars">Choose a DOB</label>
            <input
              className="form-data"
              type="date"
              name="bdate"
              required="required"
              placeholder="enter data"

            />

            <div className="gender">
              <label htmlhtmlFor=""> Gender:-</label><input type="radio" id="html" name="fav_language" value="HTML" />
              <label htmlFor="html">Male</label><br />
              <input type="radio" id="css" name="fav_language" value="CSS" />
              <label htmlFor="female">Female</label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label htmlFor="vehicle1"> Status</label>
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="btnstyle" type="submit" lassName="form-data">Add</button></div>


          </form>
        </fieldset>

      </div>

      <h1>result</h1>
      <form >
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact) => (
              <tr>
                <td>{contact.fullName}</td>
                <td>{contact.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>

    </div>
  );
}

export default App;
