import {UseFormRegisterReturn} from "react-hook-form/dist/types/form";
import {ErrorMessage} from "@/components/common/ui/form/ErrorMessage";
import {useId} from "react";

interface Props extends React.HTMLAttributes<HTMLInputElement>{
    label?: string,
    type?: 'text' | 'number' | 'email' | 'tel' | 'password',
    register: UseFormRegisterReturn<any>
    errors?: FieldErrors<any>
}

export function Input({label, type = 'text', register, errors, ...rest}: Props) {

    const id = useId()
    const name = register.name
    let hasError = false
    if (errors && errors[name]){
        hasError = true
    }

    return (
        <div className={'mb-8'}>
            <div className="flex flex-col gap-1 mb-3">
                <label htmlFor="fullNameInput" className="text-secondary-100">{label}</label>
                <input type={type} id={id} {...register} {...rest} className={`min-w-64 bg-White-500 rounded-lg px-4 py-4 ${(hasError) ? 'outline-red-600': 'outline-primary-100'}`}/>
            </div>
            <ErrorMessage errors={errors} name={name}/>
        </div>
    );
}