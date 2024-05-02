import {ApiResponseType, ModelBrandClassType} from "@/types";

interface Props {
    searchData: ApiResponseType<ModelBrandClassType>
    defaultValue: string
}

export function SearchList({searchData, defaultValue}: Props) {
    return (
        <select
            className="font-bold text-White-100 text-[10px] sm:text-base xl:text-lg sm:pl-6 2xl:px-12 cursor-pointer relative w-full h-full hover:text-blue-600">
            <option selected={true} value={''}>
                {defaultValue}
            </option>
            {
                searchData &&
                searchData.data.map(
                    (value) => {
                        return (
                            <option value={value.id}>
                                {value.attributes.title}
                            </option>
                        )
                    }
                )
            }
        </select>
    );
}