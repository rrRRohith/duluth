import PrimaryButton from "@/Components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
import Wrapper from "../Components/Wrapper";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import Menu from "./Menu";

export default function Index({ menu }) {
    
    const initialItems = [
        {
            id: uuidv4(),
            title: "",
            icon: "",
            link: "",
            children: [],
        },
    ];
    const { data, setData, post, errors, processing } = useForm({
        title: menu?.title,
        _method: menu ? "PUT" : "POST",
        items:menu?.children || initialItems
    });

    const submit = (e) => {
        e.preventDefault();
        post(
            menu
                ? route("admin.menus.update", menu.id)
                : route("admin.menus.store")
        );
    };


    const handleAddItem = () => {
        const newItem = {
            id: uuidv4(),
            title: "",
            link: "",
            icon: "",
            children: [],
        };
        setData("items", [...data.items, newItem]);
    };

    const handleAddChildItem = (parentId) => {
        const newItem = {
            id: uuidv4(),
            title: "",
            icon: "",
            link: "",
            children: [],
        };

        const addChildToParent = (items, parentId) => {
            return items.map((item) => {
                if (item.id === parentId) {
                    return { ...item, children: [...item.children, newItem] };
                } else if (item.children && item.children.length) {
                    return {
                        ...item,
                        children: addChildToParent(item.children, parentId),
                    };
                }
                return item;
            });
        };

        setData("items", addChildToParent(data.items, parentId));
    };

    const handleDeleteItem = (id) => {
        const deleteItem = (items, id) => {
            return items
                .filter((item) => item.id !== id)
                .map((item) => {
                    if (item.children && item.children.length) {
                        return {
                            ...item,
                            children: deleteItem(item.children, id),
                        };
                    }
                    return item;
                });
        };
        setData("items", deleteItem(data.items, id));
    };

    const handleChangeItem = (id, updatedItem) => {
        const updateItem = (items, id) => {
            return items.map((item) => {
                if (item.id === id) {
                    return { ...item, ...updatedItem };
                } else if (item.children && item.children.length) {
                    return { ...item, children: updateItem(item.children, id) };
                }
                return item;
            });
        };
        setData("items", updateItem(data.items, id));
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
                            <div>
                                <Menu
                                    items={data.items}
                                    onAddItem={handleAddItem}
                                    onAddChildItem={handleAddChildItem}
                                    onDeleteItem={handleDeleteItem}
                                    onChangeItem={handleChangeItem}
                                    landingPage={[]}
                                    formErrors={errors}
                                />
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
