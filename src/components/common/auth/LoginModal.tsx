import {useForm} from "react-hook-form";
import {Input, Modal} from "@/components";

interface Props {
    onClose: () => void
}

interface LoginData {
    username: string,
    password: string

}

export function LoginModal({onClose}: Props) {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const submitHandler = (data: LoginData) => {
        console.log(data)
    }
    return (
        <Modal title={'Login'} closeModal={onClose}>
            <form onSubmit={handleSubmit(submitHandler)} className=" p-12 rounded-2xl bg-white text-sm lg:text-base">
                <Input register={register('username', {required: true})} type={'text'} label={'Username'}
                       errors={errors} {...{placeholder: 'Enter Username'}}/>
                <Input register={register('password', {required: 'Password is incorrect'})} type={'password'}
                       label={'Password'} errors={errors} {...{placeholder: 'Enter Password'}}/>
                <button className="w-full text-center bg-primary-100 p-4 rounded-2xl text-white font-bold"
                        type="submit">Login
                </button>
            </form>
        </Modal>
    );
}