import {useForm} from "react-hook-form";
import {Input, Modal} from "@/components";
import {useMutation} from "@tanstack/react-query";
import {loginApiCall} from "@/api/Auth";
import {useUser} from "@/store/AuthContext";
import {useModal} from "@/store/ModalContext";
import {toast} from "react-toastify";

interface LoginData {
    identifier: string,
    password: string
}

export function LoginModal() {
    const {register, handleSubmit, formState: {errors}} = useForm<LoginData>()
    const mutate = useMutation({mutationFn: loginApiCall})
    const {closeModal} = useModal()
    const {onLogin, isLogin} = useUser()
    const submitHandler = (data: LoginData) => {
        mutate.mutate(data,{
            onSuccess: (response)=>{
                onLogin(response.jwt, response.user)
                console.log("isLogin", isLogin)
                closeModal()
                toast.success('login successfully')
            }
        })
    }

    return (
        <Modal title={'Login'}>
            <form onSubmit={handleSubmit(submitHandler)} className="p-12 rounded-2xl bg-white text-sm lg:text-base flex flex-col gap-3">
                <Input register={register('identifier', {required: true})} type={'text'} label={'Username'}
                       errors={errors} {...{placeholder: 'Enter Username'}}/>
                <Input register={register('password', {required: 'Password is incorrect'})} type={'password'}
                       label={'Password'} errors={errors} {...{placeholder: 'Enter Password'}}/>
                <button className="w-full text-center bg-primary-100 p-4 rounded-2xl text-white font-bold mt-2"
                        type="submit">Login
                </button>
            </form>
        </Modal>
    );
}