import React, { useState } from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import SecondaryButton from "@/Components/SecondaryButton";
import ActionButton from "@/Components/ActionButton";

const Menu = ({
    items,
    onAddItem,
    onAddChildItem,
    onDeleteItem,
    onChangeItem,
}) => {
    const [errors, setErrors] = useState({});

    const handleAddChildItem = (parentId) => {
        onAddChildItem(parentId);
    };

    const renderTree = (items) => {
        return items.map((item) => (
            <li key={item.id} className="mb-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2 bg-gray-100/50 rounded-md border border-1 border-gray-100 relative">
                    <ActionButton className="absolute top-[-10px] right-[-10px]"
                        title="Delete this item"
                        onClick={() => onDeleteItem(item.id)}>
                        <i className="bi bi-trash m-auto text-lg"></i>
                    </ActionButton>
                    <div>
                        <InputLabel value="Title" />
                        <TextInput
                            className="mt-1 block w-full"
                            required
                            type="text"
                            value={item.title}
                            onChange={(e) =>
                                onChangeItem(item.id, {
                                    ...item,
                                    title: e.target.value,
                                })
                            }
                        />
                        {errors[item.id] && errors[item.id].title && (
                            <InputError
                                message={errors[item.id].title}
                                className="mt-2"
                            />
                        )}
                    </div>
                    <div>
                        <InputLabel value="Link" />
                        <TextInput
                            className="mt-1 block w-full"
                            required
                            type="text"
                            value={item.link}
                            onChange={(e) =>
                                onChangeItem(item.id, {
                                    ...item,
                                    link: e.target.value,
                                })
                            }
                        />
                        {errors[item.id] && errors[item.id].link && (
                            <InputError
                                message={errors[item.id].link}
                                className="mt-2"
                            />
                        )}
                    </div>
                    <div>
                        <InputLabel value="Icon (Optional)" />
                        <TextInput
                            className="mt-1 block w-full"
                            type="text"
                            value={item.icon || ""}
                            onChange={(e) =>
                                onChangeItem(item.id, {
                                    ...item,
                                    icon: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                <div className="mt-2">
                    <ActionButton
                        title="Add a child item"
                        onClick={() => handleAddChildItem(item.id)}
                    >
                        <i className="bi bi-plus m-auto text-lg"></i>
                    </ActionButton>
                </div>
                {item.children && item.children.length > 0 && (
                    <ul className="mt-4 pl-4">{renderTree(item.children)}</ul>
                )}
            </li>
        ));
    };

    return (
        <div className="">
            <ul className="space-y-4 mb-4">{renderTree(items)}</ul>
            <SecondaryButton onClick={onAddItem}>Add Item</SecondaryButton>
        </div>
    );
};

export default Menu;
