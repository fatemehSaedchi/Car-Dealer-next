import {Section} from "@/components";
import Link from "next/link";

export default function Products() {
    return (
        <>
            <Section className="container px-4 mx-auto">
                <div className="text-secondary-50 text-sm py-3 flex gap-2">
                    <Link className={"text-primary-100 font-bold"} href='/'>Home</Link>
                    /
                    <Link className={"text-primary-100 font-bold"} href='#'>Car Collections</Link>
                    /
                    <Link href='/'>SMART GT AA-211</Link>
                </div>
            </Section>
        </>
    );
}