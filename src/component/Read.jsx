import React from 'react'



const Read = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <>

            <tr>
                <td>{contact.fullName}</td>
                <td>{contact.email}</td>
                <td>{contact.gender}</td>
                <td>{contact.bdate}</td>
                <td>{contact.hobby}</td>

                <td>
                    <button type='button' className='btn btn-success' onClick={(event) => { handleEditClick(event, contact) }} >Edit</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button type='button' className='btn btn-danger' onClick={() => { handleDeleteClick(contact.id) }}> Delete</button>
                </td>
            </tr>

        </>
    )
}

export default Read;
