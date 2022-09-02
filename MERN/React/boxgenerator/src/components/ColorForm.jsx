import React, { useState } from 'react';

const ColorForm = (props) => {
    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddColor(color);
        setColor("");
    }
    const handleColorChange = (e) => {
        setColor(e.target.value);
    }
    return (
        <form onSubmit={ handleSubmit }>
            <div className="row g-3 align-items-center">
                <div className="col-auto">
                    <label htmlFor="color" className="col-form-label">Color</label>
                </div>
                <div className="col-auto">
                    <input type="text" id="color" onChange = { handleColorChange } value = { color } className="form-control"/>
                </div>
                <div className="col-auto">
                    <input type="submit" value="Add" className="btn btn-outline-secondary"/>
                </div>
            </div>
        </form>
    );
}
export default ColorForm;