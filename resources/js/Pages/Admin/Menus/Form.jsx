import PrimaryButton from "@/Components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
import Wrapper from "../Components/Wrapper";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import MenuBuilder from "react-dnd-menu-builder";
import { useState } from "react";

export default function Index({ menu }) {
    const initialMenus = [
        {
            id: "Home",
            name: "Home",
            href: "/home",
            children: [],
        },
        {
            id: "Collections",
            href: "/collections",
            name: "Collections",
            children: [
                {
                    id: "Spring",
                    name: "Spring",
                    href: "/spring",
                    children: [],
                },
            ],
        },
    ];

    const { data, setData, post, errors, processing } = useForm({
        title: menu?.title,
        _method: menu ? "PUT" : "POST",
    });

    const submit = (e) => {
        e.preventDefault();
        post(
            menu
                ? route("admin.menus.update", menu.id)
                : route("admin.menus.store")
        );
    };

    const [menus, setMenus] = useState(initialMenus);

    const addMenu = () => {
        setMenus([
            ...menus,
            {
                id: Math.random().toString(36).substring(7),
            },
        ]);
    };

    return (
        <Wrapper title={menu ? "Edit menu" : "Create new menu"}>
            <section>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">
                            {menu ? "Edit menu" : "Create new menu"}
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                            Manage site navigations and links
                        </p>
                    </header>
                    <div className="mt-4 sm:mt-0">
                        <Link href={route("admin.menus.index")}>
                            <PrimaryButton>Back to menus</PrimaryButton>
                        </Link>
                    </div>
                </div>
                <div className="mt-6 space-y-6">
                    <div className="max-w-xl">
                        <form onSubmit={submit} className="mt-6 space-y-6">
                            <div>
                                <InputLabel value="Title" />

                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    required
                                    isFocused
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.title}
                                />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <MenuBuilder
                                    items={menus}
                                    setItems={setMenus}
                                />
                            </div>
                            <div className="">
                            <SecondaryButton
                                    type="button"
                                    onClick={() => {
                                        addMenu();
                                    }}
                                >
                                    Add Menu
                                </SecondaryButton>
                            </div>
                            <div className="flex items-center gap-4">
                                <Link href={route("admin.menus.index")}>
                                    <SecondaryButton type="button">
                                        Cancel
                                    </SecondaryButton>
                                </Link>
                                <PrimaryButton disabled={processing}>
                                    Save
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Wrapper>
    );
}
