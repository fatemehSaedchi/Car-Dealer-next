export interface Root {
    id: number;
    attributes: Attributes;
}

export interface Attributes {
    excerpt: string;
    fuel: string;
    transmition: string;
    price: number;
    passenger: number;
    description: string;
    rate: number;
    createdAt: string;
    updatedAt: string;
    dealCount: any;
    title: string;
    thumbnail: Thumbnail;
    gallery?: Gallery;
    car_model?: CarModel;
    car_type?: CarType;
    car_class: CarClass;
    car_brand?: CarBrand;
    slides?: Slides;
}

export interface Thumbnail {
    data: Data;
}

export interface Data {
    id: number;
    attributes: Attributes2;
}

export interface Attributes2 {
    name: string;
    alternativeText: any;
    caption: any;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: any;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
}

export interface Formats {
    thumbnail: Thumbnail2;
}

export interface Thumbnail2 {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: any;
    width: number;
    height: number;
    size: number;
    url: string;
}

export interface Gallery {
    data: Daum[];
}

export interface Daum {
    id: number;
    attributes: Attributes3;
}

export interface Attributes3 {
    name: string;
    alternativeText: any;
    caption: any;
    width: number;
    height: number;
    formats: Formats2;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: any;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
}

export interface Formats2 {
    thumbnail: Thumbnail3;
}

export interface Thumbnail3 {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: any;
    width: number;
    height: number;
    size: number;
    url: string;
}

export interface CarModel {
    data: Data2;
}

export interface Data2 {
    id: number;
    attributes: Attributes4;
}

export interface Attributes4 {
    title: string;
    createdAt: string;
    updatedAt: string;
}

export interface CarType {
    data: Data3;
}

export interface Data3 {
    id: number;
    attributes: Attributes5;
}

export interface Attributes5 {
    title: string;
    createdAt: string;
    updatedAt: string;
}

export interface CarClass {
    data: Data4;
}

export interface Data4 {
    id: number;
    attributes: Attributes6;
}

export interface Attributes6 {
    title: string;
    createdAt: string;
    updatedAt: string;
}

export interface CarBrand {
    data: Data5;
}

export interface Data5 {
    id: number;
    attributes: Attributes7;
}

export interface Attributes7 {
    title: string;
    createdAt: string;
    updatedAt: string;
}

export interface Slides {
    data: Daum2[];
}

export interface Daum2 {
    id: number;
    attributes: Attributes8;
}

export interface Attributes8 {
    title: string;
    image_alt: string;
    createdAt: string;
    updatedAt: string;
    link: any;
}

export const CarMock: Root =
    {
        id: 1,
        attributes: {
            excerpt: "Known for its reliability and versatility, the RAV4 offers a comfortable ride and ample cargo space",
            fuel: "gas",
            transmition: "Automatic",
            price: 28675,
            passenger: 5,
            description: "The Toyota RAV4 is a compact crossover SUV produced by the Japanese automobile manufacturer Toyota. It made its debut in Japan and Europe in 1994, and in North America in 1995, being launched in January 1996. The RAV4 is known for starting the wave of compact crossovers, offering a blend of SUV benefits such as increased cargo room, higher visibility, and the option of full-time four-wheel drive, along with maneuverability and versatility. The vehicle’s name is an abbreviation of “Recreational Active Vehicle with 4-wheel drive” or “Robust Accurate Vehicle with 4-wheel drive,” although not all models come equipped with the four-wheel drive system.",
            rate: 3.9,
            createdAt: "2024-02-12T16:39:10.396Z",
            updatedAt: "2024-02-13T12:13:25.398Z",
            dealCount: null,
            title: "Toyota RAV4",
            thumbnail: {
                data: {
                    id: 13,
                    attributes: {
                        name: "RAV_MY22_0052_V001_rDLsjogLtGElk.jpg",
                        alternativeText: null,
                        caption: null,
                        width: 380,
                        height: 380,
                        formats: {
                            thumbnail: {
                                name: "thumbnail_RAV_MY22_0052_V001_rDLsjogLtGElk.jpg",
                                hash: "thumbnail_RAV_MY_22_0052_V001_r_D_Lsjog_Lt_G_Elk_119bb17060",
                                ext: ".jpg",
                                mime: "image/jpeg",
                                path: null,
                                width: 156,
                                height: 156,
                                size: 8.78,
                                url: "/assets/images/alain-gehri-w77TcvuhtWE-unsplash01.jpg"
                            }
                        },
                        hash: "RAV_MY_22_0052_V001_r_D_Lsjog_Lt_G_Elk_119bb17060",
                        ext: ".jpg",
                        mime: "image/jpeg",
                        size: 45.28,
                        url: "/assets/images/alain-gehri-w77TcvuhtWE-unsplash01.jpg",
                        previewUrl: null,
                        provider: "local",
                        provider_metadata: null,
                        createdAt: "2024-02-13T11:58:59.397Z",
                        updatedAt: "2024-02-13T11:58:59.397Z"
                    }
                }
            },
            gallery: {
                data: [
                    {
                        id: 14,
                        attributes: {
                            name: "RHV_MY23_0003_V003_1x1_UiPZkW4De6fZfVMgQgO.jpg",
                            alternativeText: null,
                            caption: null,
                            width: 380,
                            height: 380,
                            formats: {
                                thumbnail: {
                                    name: "thumbnail_RHV_MY23_0003_V003_1x1_UiPZkW4De6fZfVMgQgO.jpg",
                                    hash: "thumbnail_RHV_MY_23_0003_V003_1x1_Ui_P_Zk_W4_De6f_Zf_V_Mg_Qg_O_9337b242ea",
                                    ext: ".jpg",
                                    mime: "image/jpeg",
                                    path: null,
                                    width: 156,
                                    height: 156,
                                    size: 9.45,
                                    url: "/uploads/thumbnail_RHV_MY_23_0003_V003_1x1_Ui_P_Zk_W4_De6f_Zf_V_Mg_Qg_O_9337b242ea.jpg"
                                }
                            },
                            hash: "RHV_MY_23_0003_V003_1x1_Ui_P_Zk_W4_De6f_Zf_V_Mg_Qg_O_9337b242ea",
                            ext: ".jpg",
                            mime: "image/jpeg",
                            size: 48.59,
                            url: "/uploads/RHV_MY_23_0003_V003_1x1_Ui_P_Zk_W4_De6f_Zf_V_Mg_Qg_O_9337b242ea.jpg",
                            previewUrl: null,
                            provider: "local",
                            provider_metadata: null,
                            createdAt: "2024-02-13T12:00:47.042Z",
                            updatedAt: "2024-02-13T12:00:47.042Z"
                        }
                    },
                    {
                        id: 15,
                        attributes: {
                            name: "RHV_MY23_0009_V003_1x1_Y3bkgrntckryonm9C.jpg",
                            alternativeText: null,
                            caption: null,
                            width: 380,
                            height: 380,
                            formats: {
                                thumbnail: {
                                    name: "thumbnail_RHV_MY23_0009_V003_1x1_Y3bkgrntckryonm9C.jpg",
                                    hash: "thumbnail_RHV_MY_23_0009_V003_1x1_Y3bkgrntckryonm9_C_05c4a7593b",
                                    ext: ".jpg",
                                    mime: "image/jpeg",
                                    path: null,
                                    width: 156,
                                    height: 156,
                                    size: 6.83,
                                    url: "/uploads/thumbnail_RHV_MY_23_0009_V003_1x1_Y3bkgrntckryonm9_C_05c4a7593b.jpg"
                                }
                            },
                            hash: "RHV_MY_23_0009_V003_1x1_Y3bkgrntckryonm9_C_05c4a7593b",
                            ext: ".jpg",
                            mime: "image/jpeg",
                            size: 32.41,
                            url: "/uploads/RHV_MY_23_0009_V003_1x1_Y3bkgrntckryonm9_C_05c4a7593b.jpg",
                            previewUrl: null,
                            provider: "local",
                            provider_metadata: null,
                            createdAt: "2024-02-13T12:00:49.220Z",
                            updatedAt: "2024-02-13T12:00:49.220Z"
                        }
                    }
                ]
            },
            car_model: {
                data: {
                    id: 1,
                    attributes: {
                        title: "RAV4",
                        createdAt: "2024-02-12T16:36:24.821Z",
                        updatedAt: "2024-02-12T16:36:24.821Z"
                    }
                }
            },
            car_type: {
                data: {
                    id: 1,
                    attributes: {
                        title: "SUV",
                        createdAt: "2024-02-12T16:37:13.423Z",
                        updatedAt: "2024-02-12T16:37:13.423Z"
                    }
                }
            },
            car_class: {
                data: {
                    id: 1,
                    attributes: {
                        title: "Compact SUV",
                        createdAt: "2024-02-12T16:35:19.667Z",
                        updatedAt: "2024-02-12T16:35:19.667Z"
                    }
                }
            },
            car_brand: {
                data: {
                    id: 1,
                    attributes: {
                        title: "toyota",
                        createdAt: "2024-02-12T16:30:28.055Z",
                        updatedAt: "2024-02-12T16:30:47.392Z"
                    }
                }
            },
            slides: {
                data: [
                    {
                        "id": 12,
                        "attributes": {
                            "title": "topDealsSlider_3",
                            "image_alt": "Toyota RAV4",
                            "createdAt": "2024-02-14T09:01:32.861Z",
                            "updatedAt": "2024-02-14T09:01:32.861Z",
                            "link": null
                        }
                    }
                ]
            }
        }
    };
