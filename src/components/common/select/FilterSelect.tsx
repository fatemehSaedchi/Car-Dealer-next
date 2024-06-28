import React, { useState } from 'react';
import Select, { SingleValue, StylesConfig } from 'react-select';
import {CarSpecificsType, ApiResponseType} from '@/types';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

interface Props {
    data: ApiResponseType<CarSpecificsType>;
    queryKey: string;
    placeholder: string;
    className?: string;
    styles?: StylesConfig<any, false>;
}

export function FilterSelect  ({ data, queryKey, placeholder, className, styles }: Props) {

    const filterForm = useForm();
    const router = useRouter();

    const options = data ? data.data.map(item => ({
        value: item.attributes.title,
        label: item.attributes.title
    })) : [];

    const initialSelectedOption = options.find(option => option.value === router.query[queryKey]) || null;

    const [selectedOption, setSelectedOption] = useState<SingleValue<{ value: any; label: any }>>(initialSelectedOption);

    const handleChange = (option: SingleValue<{ value: any; label: any }>) => {
        setSelectedOption(option);
        filterForm.setValue(queryKey, option ? option.value : '');
    };

    return (
        <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            className={`${className} mt-4`}
            placeholder={placeholder}
            styles={styles}
        />
    );
}

