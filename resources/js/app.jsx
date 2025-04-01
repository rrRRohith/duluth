import "../css/app.css";
import "./bootstrap";

import { createInertiaApp, router } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import { initFlowbite } from "flowbite";
import "bootstrap-icons/font/bootstrap-icons.css";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: "#4B5563",
    },
}).then(() => {
    // on first load
    initFlowbite();
});

router.on("navigate", (event) => {
    // Delay to ensure DOM is updated before initializing Flowbite
    setTimeout(() => {
        initFlowbite();
    }, 0);
});

router.on("success", (event) => {
    // Delay to ensure DOM is updated before initializing Flowbite
    setTimeout(() => {
        initFlowbite();
    }, 0);
});
