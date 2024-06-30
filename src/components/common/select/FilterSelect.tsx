import React, { useState, useEffect } from 'react';
import Select, { SingleValue, StylesConfig } from 'react-select';
import { CarSpecificsType, ApiResponseType } from '@/types';
import { useRouter } from 'next/router';
import { useFormContext } from 'react-hook-form';

interface Props {
    data: ApiResponseType<CarSpecificsType>;
    queryKey: string;
    placeholder: string;
    className?: string;
    styles?: StylesConfig<any, false>;
    label: string
}

export function FilterSelect({ data, queryKey, placeholder, className, styles, label }: Props) {
    const { setValue } = useFormContext();
    const router = useRouter();

    const options = [
        { value: '', label: label},
        ...(data ? data.data.map(item => ({
            value: item.attributes.title,
            label: item.attributes.title
        })) : [])
    ];

    const initialSelectedOption = options.find(option => option.value === router.query[queryKey]) || null;
    const [selectedOption, setSelectedOption] = useState<SingleValue<{ value: any; label: any }>>(initialSelectedOption);

    useEffect(() => {
        setValue(queryKey, selectedOption ? selectedOption.value : '');
    }, [selectedOption, queryKey, setValue]);

    const handleChange = (option: SingleValue<{ value: any; label: any }>) => {
        setSelectedOption(option);
    };

    const customStyles: StylesConfig<any, false> = {
        ...styles,
        option: (provided, state) => ({
            ...provided,
            color: state.data.value === '' ? '#8a8a8a' : 'black',
            backgroundColor: state.isSelected ? '#f0f0f0' : 'white'
        })
    };

    return (
        <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            className={`${className} mt-4`}
            placeholder={placeholder}
            styles={customStyles}
        />
    );
}
