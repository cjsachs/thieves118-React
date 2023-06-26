import { useForm, FieldValues } from "react-hook-form";

interface FormData {
    email: string,
    password: string
}


const Form = () => {
    
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>()
    console.log(errors)
    
    const onSubmit = (data: FieldValues) => {
        console.log(data)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        {...register('email', { required: true })}
                    />
                    {errors.email?.type === 'required' && <p className="text-danger">Email is Required</p>}
                    <div id="emailHelp" className="form-text">
                        We'll never share your email.
                    </div>
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="password"
                        className="form-label"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        {...register('password', { required: true, minLength: 6})}
                    />
                    {errors.password?.type === 'required' && <p className="text-danger">Password is Required</p>}
                    {errors.password?.type === 'minLength' && <p className="text-danger">Password must be 6 Characters</p>}


                </div>
                <button disabled={!isValid} type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
};

export default Form;
