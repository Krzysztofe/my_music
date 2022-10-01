import {useState} from "react";

const InputSelect = ({selectValue, handleSelect}) => {
    const [open, setOpen] = useState(false)

    const selectOpen = (selected) => {
        handleSelect(selected)
        setOpen(!open)
    }

    return (
        <>
        <div className='inputContainer inputContainer--height'>
            <label className = 'inputLabel'>
                        Typ
                    </label>

            <div onClick={e => setOpen(!open)}
                 className = 'option'
            > {selectValue}
                <div className = {open ? 'arrowTop' : 'arrowBottom'}> </div>

            </div>
            {open &&
                <>
                    <div onClick={e => selectOpen('Osoba')}
                         className = 'option option--styles'
                    >Osoba</div>
                    <div onClick={e => selectOpen('Firma')}
                         className = 'option option--styles'
                    >Firma</div>
                </>
            }

        </div>




        {/*<div className = 'inputContainer'>*/}
        {/*    <label className = 'inputLabel'*/}
        {/*    >*/}
        {/*        Typ*/}
        {/*    </label>*/}

        {/*<select name='select'*/}
        {/*        // value={inputValue.select}*/}
        {/*        // onChange={handleChange}*/}
        {/*        className = 'input'*/}
        {/*>*/}
        {/*    <option value=''>Wybierz</option>*/}
        {/*    <option value='osoba'>Osoba</option>*/}
        {/*    <option value='firma'>Firma</option>*/}
        {/*</select>*/}
        {/*</div>*/}

    </>
    );
};

export default InputSelect;