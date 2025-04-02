import PrimaryButton from "@/Components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
import Wrapper from "../Components/Wrapper";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";

export default function Index({ menu }) {
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
                        <header>
                            <h2 className="text-lg font-medium text-gray-900">
                                Profile Information
                            </h2>

                            <p className="mt-1 text-sm text-gray-600">
                                Update your account's profile information and
                                email address.
                            </p>
                        </header>

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
