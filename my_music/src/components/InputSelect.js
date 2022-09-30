
const InputSelect = ({inputValue, handleChange}) => {
    return (

        <div className = 'inputContainer'>
            <label className = 'inputLabel'
            >
                Typ
            </label>

        <select name='select'
                value={inputValue.select}
                onChange={handleChange}
                className = 'input'
        >
            <option value=''>Wybierz</option>
            <option value='osoba'>Osoba</option>
            <option value='firma'>Firma</option>
        </select>
        </div>
);
};

export default InputSelect;