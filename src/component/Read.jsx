import React from 'react'
import '../';

const Read = ({ contact, handleEditClick }) => {
    return (
        <>
            {/* <tr>
                <td>{contact.fullName}</td>
                <td>{contact.email}</td>
                <td>{contact.gender}</td>
                <td>{contact.bdate}</td>
                <td>{contact.hobby}</td>
                <td>{contact.status}</td>
            </tr> */}
            <tr>
                <td>{contact.fullName}</td>
                <td>{contact.email}</td>
                <td>{contact.gender}</td>
                <td>{contact.bdate}</td>
                <td>{contact.hobby}</td>
                <td>{contact.status}</td>
                <td>
                    <button className='btn btn-success' onClick={(event) => { handleEditClick(event, contact) }} >EDIT</button>
                </td>
            </tr>

        </>
    )
}

export default Read
