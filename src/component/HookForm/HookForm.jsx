import useInputState from "../../hooks/useInputHook";

const HookForm = () => {

    const [name, handleChangeName] = useInputState();
    const [email, handleChangeEmail] = useInputState();
    const [password, handleChangePassword] = useInputState();

    const handleSubmit = e =>{
        console.log('from Data', name, email, password );
        e.preventDefault();
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
            </form>
        </div>
    );
};

export default HookForm;