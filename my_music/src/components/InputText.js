const InputText = ({label, name, handleChange, inputValue}) => {
    return (
            <div className='inputContainer'>
                <label className = 'inputLabel'>{label}</label>
                <input type='text' name={name}
                       value={inputValue}
                       onChange={handleChange}
                       placeholder={label}
                       className = 'input'
                />
            </div>

    );
};

export default InputText;