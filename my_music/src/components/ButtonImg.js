const ButtonImg = ({setImage}) => {
    return (
        <>

            <div className="inputContainer">

                <input type='file' id='file'
                       accept="image/jpg, image/jpeg"
                       placeholder='załącz'
                       onChange={e => setImage(e.target.files[0])}
                       className='inputFile'/>

                <label htmlFor='file'
                       className='input'>
                    Wybierz plik
                </label>
            </div>
        </>
    );
};

export default ButtonImg;