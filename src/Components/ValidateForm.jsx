export default function ValidateForm(values) {
    let errors = {};

    if (!values.username.trim) {
        errors.username = 'Username required'
    }

    if (!values.email) {
        errors.email = 'Email required';
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
    {
        errors.email = 'Email address is invalid';
    }

    if (!values.passsword) {
        errors.passsword = 'Password is required';
    } else if (values.passsword.length < 6) {
        errors.passsword = 'Password needs to be characters or more'
    }

    if(!values.passsword2) {
        errors.password2 = 'password is required'
    }    else if (values.passsword2 !== values.passsword ) {
        errors.password2 = 'Password do not match'
    }

    return errors;
}