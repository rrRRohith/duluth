import { Head } from "@inertiajs/react";

export default function Layout({ title, children }) {
    return (
        <>
            <Head title={title}></Head>
            {children}
        </>
    );
}
