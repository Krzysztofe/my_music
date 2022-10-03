const InputText = ({label, name, handleChange, inputValue}) => {

    const propsHandleChange = (e) => {
      if (typeof handleChange === 'function'){
          return handleChange(e)
      }
    }

    return (
            <div className='inputContainer'>
                <label className='inputLabel'>
                    {label}
                </label>
                <input type='text' name={name}
                       value={inputValue}
                       onChange={propsHandleChange}
                       placeholder={label}
                       className='input'/>
            </div>
    );
};

export default InputText;