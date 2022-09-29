const Input = ({inputValue, handleChange}) => {

    if (inputValue.select === 'osoba') {

        return (
            <>
                <h2>numer indentyfikacyjny</h2>
                <div className='inputContainer'>
                    <input type='text' name='pesel'
                           value={inputValue.pesel}
                           onChange={handleChange}
                           placeholder='PESEL'
                    />
                </div>
            </>
        )
    } else if (inputValue.select === '') {
        return null
    }

    {
        return (
        <>
            <h2>numer indentyfikacyjny</h2>
        <div className='inputContainer'>
            <input type='text' name='nip'
                   value={inputValue.nip}
                   onChange={handleChange}
                   placeholder='NIP'
            />
        </div>
        </>
        )
    }


};

export default Input;