import React from 'react';
import './FormSelect.scss'

const FormSelect = ({ options, defaultValue, handleChange, label, ...otherProps }) => {
    if (!Array.isArray(options) || options.length < 1) {
        return null
    }

    return (
        <div className="formRow">
            {label && (
                <label>{label}</label>
            )}
            <select className="formSelect" value={defaultValue} onChange={handleChange}>
                {options.map((option, index) => {
                    const {value, name} = option;

                    return (
                        <option key={index} value={value}>{name}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default FormSelect
