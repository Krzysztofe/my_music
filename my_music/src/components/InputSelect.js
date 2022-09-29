
const InputSelect = ({inputValue, handleChange}) => {
    return (
        <select name='select'
                value={inputValue.select}
                onChange={handleChange}
        >
            <option value=''>wybierz</option>
            <option value='osoba'>osoba</option>
            <option value='firma'>firma</option>
        </select>
    );
};

export default InputSelect;