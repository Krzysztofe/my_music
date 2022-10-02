import {useEffect, useState} from "react";
import {validation} from './Library'
import InputText from "./InputText";
import InputSelect from "./InputSelect";
import InputNumber from "./InputNumber";
import ButtonImg from "./ButtonImg";
import ImageContainer from "./ImageContainer";
import ButtonSubmit from "./ButtonSubmit";
import {apiXXX, postData} from "./FetchOperations";

const Form = () => {

    const [inputValue, setInputValue] = useState({
        name: '', surname: '', pesel: "", nip: "",
    })
    const [image, setImage] = useState('')
    const [selectValue, setSelectValue] = useState('Wybierz')
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({})


    const [previev, setPreviev] = useState('')

    const [sented, setSented] = useState(false)
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
                setPreviev(reader.result)
            }
            reader.readAsDataURL(image)
        } else {
            setPreviev(null)
        }
    }, [image])


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
            ...formData,
            name: inputValue.name,
            surname: inputValue.surname,
            pesel: inputValue.pesel,
            nip: inputValue.nip,
            image: [image]
        })

        setImage('')
        setPending(true)

        postData (apiXXX, formData, setFetchError, setPending)
    }


    // https://jsonplaceholder.typicode.com/posts/

    // https://localhost:60001/Contractor/Save
    // https://localhost:60001/Contractor/Save

    return (
        <>
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
                                 handleSelect={handleSelect}
                        // handleChange={handleChange}
                    />


                    <InputNumber inputValue={inputValue}
                                 selectValue={selectValue}
                                 handleChange={handleChange}
                                 errors={errors}/>

                    <ButtonImg setImage={setImage}/>

                    <ButtonSubmit pending={pending}
                                  fetchError={fetchError}/>
                </div>
                <ImageContainer previev={previev}
                fetchError={fetchError}/>

            </form>
        </>

    );
};

export default Form;