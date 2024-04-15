import {useState} from "react";
import {spans} from "next/dist/build/webpack/plugins/profiling-plugin";

interface Tab {
    title: string;
    content: string;
}

interface TabsComponentProps {
    tabs: Tab[];
}
export function Tabs({ tabs } : TabsComponentProps) {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };
    return (
        <div className="lg:text-lg">
            <div className="flex">
                {tabs.map((tab, index) => {
                    if (index < tabs.length-1){
                        return (
                            <>
                                <div key={index}
                                     className={`text-secondary-10 ${index === activeTab ? 'text-secondary-400 font-bold' : ''}`}
                                     onClick={() => handleTabClick(index)}>
                                    {tab.title}
                                </div>
                                <span className={'text-secondary-10 px-2'}>|</span>

                            </>

                        )
                    }else {
                        return (
                            <>
                                <div key={index}
                                     className={`pr-3 text-secondary-10 ${index === activeTab ? 'text-secondary-400 font-bold' : ''}`}
                                     onClick={() => handleTabClick(index)}>
                                    {tab.title}
                                </div>
                            </>

                        )
                    }

                })}
            </div>
            <div className="pt-10">
                {tabs[activeTab] && (
                    <>
                        <p>{tabs[activeTab].content}</p>
                    </>
                )}
            </div>
        </div>
    );
}