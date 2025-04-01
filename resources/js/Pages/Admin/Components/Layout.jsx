import { Head } from "@inertiajs/react";
import Flash from "@/Components/Flash";

export default function Layout({ title, children }) {
    return (
        <>
            <div className="bg-gray-50 min-h-screen">
                <Flash />
                <Head title={title}></Head>
                {children}
            </div>
        </>
    );
}
