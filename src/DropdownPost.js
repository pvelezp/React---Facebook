import React from 'react'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import './DropdownPost.css'

const DropdownPost = () => {
    return (
        <div className="dropdownpost">
                 <div className="dropdownpost__edit">
                <EditIcon />
                <p>Edit</p>
                </div>
            <div className="dropdownpost__delete">
            <DeleteIcon />
            <p>Delete</p>
            </div>

        </div>
    )
}

export default DropdownPost
