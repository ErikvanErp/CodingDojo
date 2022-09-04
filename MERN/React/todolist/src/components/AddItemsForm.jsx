import React, { useState } from 'react';

const AddItemsForm = (props) => {
    const [item, setItem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddItem(item);
        setItem("");
    }
    const handleItemChange = (e) => {
        setItem(e.target.value);
    }
    return (
        <form onSubmit={ handleSubmit }>
            <div className="row g-3 align-items-center">
                <div className="col-auto">
                    <label htmlFor="item" className="col-form-label">New To Do Item</label>
                </div>
                <div className="col-auto">
                    <input type="text" id="item" onChange = { handleItemChange } value = { item  } className="form-control"/>
                </div>
                <div className="col-auto">
                    <input type="submit" value="Add" className="btn btn-primary"/>
                </div>
            </div>
        </form>
    );
}
export default AddItemsForm;