import PrimaryButton from "@/Components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
import Wrapper from "../Components/Wrapper";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import Select from "react-select";

export default function Index({ user, roles }) {
    const { data, setData, post, errors, processing } = useForm({
        first_name: user?.first_name,
        last_name: user?.last_name,
        email: user?.email,
        phone: user?.phone,
        password: "",
        password_confirmation: "",
        role: user?.role,
        _method: user ? "PUT" : "POST",
    });

    const selectedRole = roles.find((role) => role.value == data.role);

    const submit = (e) => {
        e.preventDefault();
        post(
            user
                ? route("admin.users.update", user.id)
                : route("admin.users.store")
        );
    };

    return (
        <Wrapper title={user ? "Edit user" : "Create new user"}>
            <section>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">
                            {user ? "Edit user" : "Create new user"}
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                            Manage site navigations and links
                        </p>
                    </header>
                    <div className="mt-4 sm:mt-0">
                        <Link href={route("admin.users.index")}>
                            <PrimaryButton>Back to users</PrimaryButton>
                        </Link>
                    </div>
                </div>
                <div className="mt-6 space-y-6">
                    <div className="max-w-xl">
                        <form onSubmit={submit} className="mt-6 space-y-6">
                            <div className="mb-4">
                                <InputLabel value="First name" />

                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.first_name}
                                    onChange={(e) =>
                                        setData("first_name", e.target.value)
                                    }
                                    required
                                    isFocused
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.first_name}
                                />
                            </div>

                            <div className="mb-4">
                                <InputLabel value="Last name" />

                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.last_name}
                                    onChange={(e) =>
                                        setData("last_name", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.last_name}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Email" />

                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.email}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Phone" />

                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.phone}
                                    onChange={(e) =>
                                        setData("phone", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.phone}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Role" />

                                <Select
                                    options={roles}
                                    defaultValue={selectedRole}
                                    onChange={(e) => setData("role", e.value)}
                                    required
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.role}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Password" />

                                <TextInput
                                    type="password"
                                    className="mt-1 block w-full"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    required={user ? false : true}
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.password}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Confirm Password" />

                                <TextInput
                                    type="password"
                                    className="mt-1 block w-full"
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                    required={user ? false : true}
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.password_confirmation}
                                />
                            </div>

                            <div className="flex items-center gap-4">
                                <Link href={route("admin.users.index")}>
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
