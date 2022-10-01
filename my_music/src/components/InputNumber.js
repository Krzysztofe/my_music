const InputNumber = ({inputValue, selectValue, handleChange, errors}) => {

    if (selectValue === 'Osoba') {

        return (
            <div className='inputContainer'>
                <label className = 'inputLabel'
                >
                    Podaj nr indentyfikacyjny
                </label>
                <input type='text' name='pesel'
                       value={inputValue.pesel}
                       onChange={handleChange}
                       placeholder='PESEL'
                       className = 'input'
                />
                <p className = 'errors' >{errors}</p>
            </div>
        )
    } else if (selectValue === 'Wybierz') {
        return (
            <div className='inputContainer'>
                <label className = 'inputLabel'
                >
                    Podaj nr indentyfikacyjny
                </label>
                <input type='text'
                       value={''}
                       placeholder='Wybież typ'
                       onChange={handleChange}
                       className = 'input'
                />
                <p className = 'errors' >{errors}</p>
            </div>
        )
    } else {
        return (
            <div className='inputContainer'>
                <label className = 'inputLabel'
                >
                    Podaj nr indentyfikacyjny
                </label>
                <input type='text' name='nip'
                       value={inputValue.nip}
                       onChange={handleChange}
                       placeholder='NIP'
                       className = 'input'
                />
                <p className = 'errors' >{errors}</p>
            </div>
        )
    }
};

export default InputNumber;