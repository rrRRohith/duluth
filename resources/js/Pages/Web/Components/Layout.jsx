import { Head } from "@inertiajs/react";
import Flash from "@/Components/Flash";

export default function Layout({ title, children }) {
    return (
        <>
            <Flash />
            <Head title={title}></Head>
            {children}
        </>
    );
}
