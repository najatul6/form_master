import { useState } from "react";

const StateFullForm = () => {
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');


    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length <6){
            setError('Password need minimum 6 charector or longer')
        }
        else{
            setError('')
            console.log(email, name, password)
        }

    }

    const handleChangeEmail = e =>{
        setEmail(e.target.value);

    }

    const handleChangeName = e =>{
        setName(e.target.value);
    }

    const handleChangePassword = e => {
        setPassword(e.target.value);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                onChange={handleChangeName}
                type="text" name="name" />
                <br />
                <input
                onChange={handleChangeEmail}
                type="email" name="email" />
                <br />
                <input
                onChange={handleChangePassword}
                type="password" name="password" />
                <br />
                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFullForm;