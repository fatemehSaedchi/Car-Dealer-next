import {useForm} from "react-hook-form";
import {Input} from "@/components";

interface FormData {
    
}

export function ContactForm() {

    const {register, handleSubmit, formState:{errors}} = useForm()

    const submitHandle = (data: FormData)=>{
        console.log(data)
    }

    return (
            <form onSubmit={handleSubmit(submitHandle)} className="shadow-Xl p-12 rounded-2xl w-full max-w-xl lg:max-w-none mx-auto lg:w-[45%] bg-white text-sm lg:text-base">
                <div className={'flex flex-row justify-between w-full'}>
                    <Input register={register('firstname',{required: 'Enter your Firstname please', minLength:{value: 4, message:'Firstname must be at least 4 characters'}})} type={'text'} label={'Firstname'} errors={errors} {...{placeholder :'Enter your Firstname please'}}/>
                    <Input register={register('lastname',{required: 'Enter your Lastname please', minLength:{value: 4, message:'Lastname must be at least 4 characters'}})} type={'text'} label={'Lastname'} errors={errors} {...{placeholder :'Enter your Lastname please'}}/>
                </div>
                <Input register={register('username',{required: true})} type={'text'} label={'Username'} errors={errors} {...{placeholder: 'Enter Username please'}}/>
                <Input register={register('email',{required: true})} type={'email'} label={'Email'} errors={errors} {...{placeholder: 'Enter Email please'}}/>
                <Input register={register('phoneNumber',{required: 'Enter your phone number please' , minLength:{value:8, message: 'Phone number must be at least 8 characters'}})} type={'tel'} label={'Phone'} errors={errors} {...{placeholder: 'Enter your Phone number please'}}/>
                <Input register={register('password',{required: 'Enter password please' , minLength:{value:8, message: 'Password must be at least 8 characters'}})} type={'password'} label={'Password'} errors={errors} {...{placeholder: 'Enter Password please'}}/>
                <div className="flex flex-row gap-3 my-6">
                    <input type="checkbox" name="" id="termsCheck"/>
                    <label htmlFor="termsCheck" className="text-secondary-100">
                        Accept <span className="text-primary-100 font-bold">terms & conditions</span>
                    </label>
                </div>
                <button className="w-full text-center bg-primary-100 p-4 rounded-2xl text-white font-bold" type="submit">Register</button>
            </form>
    );
}