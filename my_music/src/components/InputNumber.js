const InputNumber = ({inputValue, handleChange}) => {

    if (inputValue.select === 'osoba') {

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
            </div>
        )
    } else if (inputValue.select === '') {
        return (
            <div className='inputContainer'>
                <label className = 'inputLabel'
                >
                    Podaj nr indentyfikacyjny
                </label>
                <input type='text'
                       value={''}
                       placeholder='Wybież typ'
                       className = 'input'
                />
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
            </div>
        )
    }
};

export default InputNumber;