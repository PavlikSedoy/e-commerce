import React from 'react'

import './forminput.scss'

const Forminput = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className="formInput">
            {label && (
                <label className="formInput__label">
                    {label}
                </label>
            )}

            <input
                className="formInput__field"
                onChange={handleChange}
                {...otherProps}    
            />
        </div>
    )
}

export default Forminput
