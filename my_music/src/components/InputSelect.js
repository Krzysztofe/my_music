import {useState} from "react";

const InputSelect = ({selectValue, handleSelect}) => {
    const [open, setOpen] = useState(false)

    const propsHandleSelect = (string) => {
        if (typeof handleSelect === 'function') {
            return handleSelect(string)
        }
    }

    return (
        <div className='inputContainer'>
            <label className='inputLabel'>
                Typ
            </label>

            <div onClick={e => setOpen(!open)}
                 className='option'>
                {selectValue}
                <div className={open ? 'arrowTop' : 'arrowBottom'}></div>
            </div>

            {open &&
                <>
                    <div onClick={e => {
                        propsHandleSelect('Osoba');
                        setOpen(state => !state)
                    }}
                         className='option'>
                        Osoba
                    </div>

                    <div onClick={e => {
                        propsHandleSelect('Firma');
                        setOpen(state => !state)
                    }}
                         className='option'>
                        Firma
                    </div>
                </>
            }
        </div>
    );
};

export default InputSelect;