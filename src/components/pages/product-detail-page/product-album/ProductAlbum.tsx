import {ImageView} from "@/components";
import {Root} from "@/mock/CarMock";

interface Props {
    data: Root
}

export function ProductAlbum({data}: Props) {
    return (
        <div className="flex flex-wrap justify-center gap-y-3 lg:gap-y-7">
            <div className="w-11/12 mb-3">
                {
                    data?.attributes?.thumbnail ? (
                        <ImageView
                            src={data.attributes.thumbnail.data.attributes.formats.thumbnail.url}
                            alt={data.attributes.thumbnail.data.attributes.formats.thumbnail.name}
                            width={data.attributes.thumbnail.data.attributes.formats.thumbnail.width}
                            height={data.attributes.thumbnail.data.attributes.formats.thumbnail.height}
                            classname={"rounded-xl w-full lg:max-h-[364px] object-cover object-center"}
                        />
                    ) : (
                        <div className={"bg-gray-500 w-11/12 mb-3 h-52 lg:h-[368px]"}></div>
                    )
                }
            </div>
            <div className="w-11/12 grid grid-cols-4 grid-rows-1 overflow-x-scroll gap-3 lg:gap-7 py-4"> {data?.attributes?.gallery &&
                data.attributes.gallery.data.map((galleryItem, index) =>
                    galleryItem ? (
                        <ImageView
                            key={index}
                            src={galleryItem.attributes.url}
                            alt={''}
                            width={galleryItem.attributes.width}
                            height={galleryItem.attributes.height}
                            classname={"w-full aspect-square rounded-xl object-cover object-center"}
                        />
                    ) : (
                        <div key={index} className={"w-full bg-gray-500 h-16"}></div>
                    )
                )
            }
            </div>
        </div>
    );
}