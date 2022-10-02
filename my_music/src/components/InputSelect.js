import {useState} from "react";

const InputSelect = ({selectValue, handleSelect, handleChange}) => {
    const [open, setOpen] = useState(false)

    return (
        <div className = 'inputContainer'>
            <label className = 'inputLabel'
            >Typ
            </label>

            <div onClick = {e => setOpen(!open)}
                 className  = 'option'
            > {selectValue}
                <div className={open ? 'arrowTop' : 'arrowBottom'}></div>
            </div>

            {open &&
                <>
                    <div onClick = {e => {
                        // handleChange('Osoba');
                        handleSelect ('Osoba');
                            setOpen(!open)
                        }}
                         className='option'
                    >Osoba
                    </div>

                    <div onClick = {e => {
                        // handleChange('Firma');
                        handleSelect ('Firma');
                        setOpen(!open)
                        }}
                         className='option'
                    >Firma
                    </div>
                </>
            }
        </div>
    );
};

export default InputSelect;