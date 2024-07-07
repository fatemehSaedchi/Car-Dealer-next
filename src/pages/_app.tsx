import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

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

import {AppContext, default as NextApp} from 'next/app';

import type {AppProps} from "next/app";
import {Layout} from "@/components";
import {Montserrat} from "next/font/google";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {ToastContainer} from "react-toastify";
import {ModalContextProvider} from "@/store/ModalContext";
import {AuthContextProvider} from "@/store/AuthContext";
import {useState} from "react";
import {isSSR} from "@/utils/isSSR";
import {ApiResponseType, MenuType} from "@/types";

const montserrat = Montserrat({
    subsets: ['latin']
})


function App({Component, ...pageProps}: AppProps) {

    // @ts-ignore
    console.log('pageProps', pageProps.initialQueryData.MenuData)

    // @ts-ignore
    const MenuData: ApiResponseType<MenuType> = pageProps.initialQueryData.MenuData

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
                    <AuthContextProvider>
                        <ModalContextProvider>
                            <div id={'portal'}></div>
                            <Layout MenuData={MenuData}>

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
                                <SpeedInsights />
                                <Analytics />

                            </Layout>
                            <ReactQueryDevtools initialIsOpen={false}/>
                        </ModalContextProvider>
                    </AuthContextProvider>
            </QueryClientProvider>
        </>
    );
}

App.getInitialProps = async (context: AppContext) /*: Promise<AppOwnProps & AppInitialProps>*/ =>{
    const ctx = await NextApp.getInitialProps(context)
    let MenuData = null

    try {
        // get data only on server
        if (isSSR()){
            MenuData = await (await fetch('https://cwebgostar.navaxcollege.com/api/menus?populate=%2A')).json()
        }
    } catch (error) {
        return { ...ctx, initialQueryData: { MenuData: null } };
    }

    return {...ctx, initialQueryData: {MenuData}}
}


export default App