import React from 'react'

const Edit = () => {
    return (
        <>
            <tr>
                <td><input
                    className="form-data"
                    type="text"
                    name="fullName"
                    required="required"
                    placeholder="Enter a name..."

                />
                </td>
                <td>
                    <input
                        className="form-data"
                        type="email"
                        name="email"
                        required="required"
                        placeholder="Enter an email..."


                    />
                </td>
                <td>
                    <input type="radio" id="male" name="gender" value="Male" />

                    <label htmlFor="html">Male</label>

                    <input type="radio" id="female" name="gender" value="Female" />

                    <label htmlFor="female">Female</label>

                </td>
                <td>
                    <input
                        className="form-data"
                        type="date"
                        name="bdate"
                        required="required"
                        placeholder="enter data"


                    />
                </td>
                <td>
                    <select className="form-data" id="cars" name="hobby" >
                        <option value="Singing">Singing</option>
                        <option value="Sport">Sport</option>
                        <option value="swimming">swimming</option>
                        <option value="Traveling">Traveling</option>


                    </select>
                </td>

            </tr>
        </>
    )
}

export default Edit;
