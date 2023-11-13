import Avatar from '../../../public/vite.svg'

const LoginForm = props => {
    const {pictureRef, onSubmit, onChange, formValues} = props;

    return(
        <div className="align">
            <div className="grid">
                <div className="login">
                <img src={Avatar} alt='avatar' className='avatar' ref={pictureRef} />

                <h2>Hello</h2>
                <h3>Please login...</h3>

                <form className="login-form" onSubmit={onSubmit}>
                    <div className="form-field">
                        <input 
                            type='text'
                            name='username'
                            value={formValues.username}
                            placeholder='Enter username...'
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-field">
                        <input 
                            type='password'
                            name='password'
                            value={formValues.password}
                            placeholder='Enter password...'
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-field">
                        <input 
                            type='submit'
                            value='Login'
                        />
                    </div>
                </form>

                <span>Forgot <a href="/" className="forgot">password?</a></span>
                </div>
            </div>
        </div>
    )
}

export default LoginForm