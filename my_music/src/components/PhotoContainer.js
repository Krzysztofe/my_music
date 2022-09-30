import Button from "./Button";

const PhotoContainer = ({previev, setImage}) => {
    return (
        <div className='inputsFile__container'>
            <input type ='file' id ='file'
                   accept="image/jpg, image/jpeg"
                   placeholder='załącz'
                   onChange={e => setImage(e.target.files[0])}
                   className='inputFile'
            />

            <label htmlFor = 'file'
                   className='inputFile__label'
            >
                Wybierz plik
            </label>

            <div className='photoContainer'>
                {previev &&
                    <img src={previev} className='photo'/>
                }
                <Button/>
            </div>
        </div>
    );
};

export default PhotoContainer;