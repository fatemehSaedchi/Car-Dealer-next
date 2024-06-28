import { SpeedInsights } from "@vercel/speed-insights/next"

import "@/styles/globals.css";
import '@/styles/icons.css'
import 'swiper/css'
import "swiper/css/autoplay"
import 'swiper/css/free-mode';
import "swiper/css/navigation"
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import "swiper/css/effect-fade";
import 'react-toastify/dist/ReactToastify.css'


import type {AppProps} from "next/app";
import {Layout} from "@/components";
import {Montserrat} from "next/font/google";
import {dehydrate, HydrationBoundary, QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {ToastContainer} from "react-toastify";
import {ModalContextProvider} from "@/store/ModalContext";
import {AuthContextProvider} from "@/store/AuthContext";
import {useState} from "react";
import {getMenusApiCall} from "@/api";


const montserrat = Montserrat({
    subsets: ['latin']
})

export async function getServerSideProps() {

    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: [getMenusApiCall.name],
        queryFn: getMenusApiCall
    })

    return {props: {dehydratedState: dehydrate(queryClient),}}
}


export default function App({Component, pageProps}: AppProps) {


    const [queryClient] = useState(() => new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                    refetchIntervalInBackground: false,
                    retry: 0,
                    staleTime: 60 * 1000
                }
            }
        })
    )


    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${montserrat.style.fontFamily};
                }
            `}</style>
            <SpeedInsights/>
            <QueryClientProvider client={queryClient}>
                <HydrationBoundary state={pageProps.dehydratedState}>
                    <AuthContextProvider>
                        <ModalContextProvider>
                            <div id={'portal'}></div>
                            <Layout>

                                <Component {...pageProps} />
                                <ToastContainer
                                    position="top-right"
                                    autoClose={5000}
                                    newestOnTop
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss={false}
                                    draggable={false}
                                    theme="dark"
                                    className={'custom-toast-container'}
                                />

                            </Layout>
                            <ReactQueryDevtools initialIsOpen={false}/>
                        </ModalContextProvider>
                    </AuthContextProvider>
                </HydrationBoundary>
            </QueryClientProvider>
        </>
    );
}

