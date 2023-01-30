import { useState, useEffect } from "react"
import './Modal.css'

const UseForm = validate => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefualt();

        setErrors(validate(values));
    };

    return { handleChange, values, handleSubmit, errors };
};

export default UseForm;