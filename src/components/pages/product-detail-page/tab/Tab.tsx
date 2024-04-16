import {useState} from "react";

interface Tab {
    title: string | undefined;
    content: string | undefined;
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
                    let Tab = <div key={index}
                                   className={`text-secondary-10 ${index === activeTab ? 'text-secondary-400 font-bold' : ''}`}
                                   onClick={() => handleTabClick(index)}>
                        {tab.title}
                    </div>
                    if (index < tabs.length - 1) {
                        return (
                            <>
                                {Tab}
                                <span className={'text-secondary-10 px-2'}>|</span>
                            </>
                        )
                    } else {
                        return (
                            <>
                                {Tab}
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