import { useRef, useState } from "react";
import LoginForm from "../components/LandingPage/LoginForm";
import '../styles/landingpage.css'

const initialFormValues = {
    username: '',
    password: ''
}

const LandingPage = () => {
    const [formValues, setFormValues] = useState(initialFormValues);

    const pictureRef = useRef();

    const handleChange = e => {
        const {name, value} = e.target;

        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const handleSubmit = e => {
        pictureRef.current.classList.toggle('loading-radial');
        e.preventDefault();
        setFormValues(initialFormValues);
        console.log('Submitted!');
    }


    return(
        <>
            <LoginForm 
                onSubmit={handleSubmit}
                onChange={handleChange}
                formValues={formValues}
                pictureRef={pictureRef}/>
        </>
    )
}

export default LandingPage