import {getMenusApiCall} from "@/api";
import {dehydrate, QueryClient} from "@tanstack/react-query";

export default async function getServerSideProps() {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: [getMenusApiCall.name],
        queryFn: getMenusApiCall,
    })

    return {
        props: { dehydratedState: dehydrate(queryClient), } // Return your data
    };
}
