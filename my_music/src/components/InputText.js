const InputText = ({label, name, handleChange, inputValue}) => {
    return (
        <div>
            <div className='inputContainer'>
                <label>{label}</label>
                <input type='text' name={name}
                       value={inputValue}
                       onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default InputText;