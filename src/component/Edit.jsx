import React from 'react'

const Edit = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
    return (
        <>
            <tr>
                <td><input
                    className="form-data"
                    type="text"
                    name="fullName"
                    required="required"
                    placeholder="Enter a name..."
                    value={editFormData.fullName}
                    onChange={handleEditFormChange}

                />
                </td>
                <td>
                    <input
                        className="form-data"
                        type="email"
                        name="email"
                        required="required"
                        placeholder="Enter an email..."
                        value={editFormData.email}
                        onChange={handleEditFormChange}


                    />
                </td>
                <td>
                    <input type="radio" id="male" name="gender" value='Male' onChange={handleEditFormChange} />

                    <label htmlFor="html">Male</label>

                    <input type="radio" id="female" name="gender" value="Female" onChange={handleEditFormChange} />

                    <label htmlFor="female">Female</label>

                </td>
                <td>
                    <input
                        className="form-data"
                        type="date"
                        name="bdate"
                        required="required"
                        placeholder="enter data"
                        value={editFormData.bdate} onChange={handleEditFormChange}


                    />
                </td>
                <td>
                    <select className="form-data" id="cars" name="hobby" value={editFormData.hobby} onChange={handleEditFormChange}>
                        <option value="Singing">Singing</option>
                        <option value="Sport">Sport</option>
                        <option value="swimming">swimming</option>
                        <option value="Traveling">Traveling</option>


                    </select>
                </td>
                <td>
                    <button className='btn btn-warning' type='submit'>save</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button type='button' className='btn btn-info' onClick={handleCancelClick} >Cancel</button>

                </td>

            </tr>
        </>
    )
}

export default Edit;
