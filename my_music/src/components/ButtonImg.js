import Button from "./ButtonSubmit";

const ButtonImg = ({previev, setImage, pending}) => {
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

            {/*<div className='photo'>*/}
            {/*    {previev &&*/}
            {/*        <img src={previev}*/}
            {/*             className='photo'*/}
            {/*        />*/}
            {/*    }*/}
            {/*</div>*/}
        </>
    );
};

export default ButtonImg;