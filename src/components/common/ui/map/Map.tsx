export function Map() {
    return (
        <div className="mt-5 -z-10">
            <div className="max-w-6xl mx-auto relative">
                <img src="/assets/images/about/map.svg" alt=""/>
                <div
                    className="w-[10%] h-1/6 max-w-[80px] max-h-[77px] absolute top-[15%] left-[8%] rounded-xl bg-white flex justify-center items-center shadow-xl">
                    <img className="w-[50%]" src="/assets/images/about/car-blue.png" alt=""/>
                </div>
                <div
                    className="w-[13%] h-[21%] max-w-[95px] max-h-[90px] absolute top-[35%] left-[40%] rounded-2xl  bg-primary-100 flex justify-center items-center">
                    <img className="w-[50%]" src="/assets/images/about/carVector.png" alt=""/>
                </div>
                <div
                    className="w-[15%] h-1/4 max-w-[110px] max-h-[108px] absolute top-[18%] right-[10%] rounded-2xl bg-white flex justify-center items-center shadow-xl">
                    <img className="w-[50%]" src="/assets/images/about/car-blue.png" alt=""/>
                </div>
                <div
                    className="w-[8%] h-[13%] max-w-[58px] max-h-[56px] absolute bottom-[20%] left-1/2 rounded-lg bg-white flex justify-center items-center shadow-xl">
                    <img className="w-[50%]" src="/assets/images/about/car-blue.png" alt=""/>
                </div>
            </div>
        </div>
    );
}