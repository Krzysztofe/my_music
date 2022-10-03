import {useEffect, useState} from "react";
import {validation} from './Validation'
import InputText from "./InputText";
import InputSelect from "./InputSelect";
import InputNumber from "./InputNumber";
import ButtonImg from "./ButtonImg";
import ImageContainer from "./ImageContainer";
import ButtonSubmit from "./ButtonSubmit";
import {postData} from "./FetchOperations";

const Form = () => {

    const [inputValue, setInputValue] = useState({
        name: '', surname: '', pesel: "", nip: "",
    })
    const [image, setImage] = useState('')
    const [selectValue, setSelectValue] = useState('Wybierz')
    const [formData, setFormData] = useState({})

    const [errors, setErrors] = useState([])
    const [preview, setPreview] = useState('')

    const [pending, setPending] = useState(false)
    const [fetchError, setFetchError] = useState(null)

    const handleChange = (e) => {

        // const value = e.target.type === "file" ? e.target.files : e.target.value
        // setInputValue({
        //     ...inputValue,
        //     [e.target.name]: value
        // })
        //

        // setSelectValue(e, string)
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
    }

    const handleSelect = (string) => {
        setSelectValue(string)
    }

    useEffect(() => {
        if (image) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result)
            }
            reader.readAsDataURL(image)
        } else {
            setPreview(null)
        }
    }, [image])


    useEffect(() => {
        if (selectValue === 'Osoba') {
            setInputValue({...inputValue, nip: ''})
        } else if (selectValue === 'Firma') {
            setInputValue({...inputValue, pesel: ''})
        }
    }, [selectValue])

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validation(inputValue, selectValue))
        if (validation(inputValue, selectValue).length > 0) {
            return
        }

        setInputValue({
            name: '', surname: '', select: '',
            pesel: "", nip: ""
        })

        setFormData({
            name: inputValue.name,
            surname: inputValue.surname,
            pesel: inputValue.pesel,
            nip: inputValue.nip,
            image: [image]
        })

        setImage('')
        setPending(true)

        postData(formData, setFetchError, setPending)
    }

    return (
        <form onSubmit={handleSubmit}
              className='form'>

            <div className="inputs">

                <InputText label={'Imię'} name={'name'}
                           inputValue={inputValue.name}
                           handleChange={handleChange}/>

                <InputText label={'Nazwisko'} name={'surname'}
                           inputValue={inputValue.surname}
                           handleChange={handleChange}/>

                <InputSelect selectValue={selectValue}
                             handleSelect={handleSelect}/>

                <InputNumber inputValue={inputValue}
                             selectValue={selectValue}
                             handleChange={handleChange}
                             errors={errors}/>

                <ButtonImg setImage={setImage}/>

                <ButtonSubmit pending={pending}
                              fetchError={fetchError}/>
            </div>

            <ImageContainer preview={preview}
                            fetchError={fetchError}/>

        </form>
    );
};

export default Form;