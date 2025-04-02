import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import Wrapper from "../Components/Wrapper";

export default function Profile({ user }) {
    const { data, setData, put, errors, processing, recentlySuccessful } =
        useForm({
            first_name: user.first_name,
            last_name: user.last_name,
            phone: user.phone,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();

        put(route("admin.profile.update"));
    };

    return (
        <Wrapper title="Profle">
            <section className="max-w-xl">
                <header>
                    <h2 className="text-lg font-medium text-gray-900">
                        Profile Information
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Update your account's profile information and email
                        address.
                    </p>
                </header>

                <form onSubmit={submit} className="mt-6 space-y-6">
                    <div>
                        <InputLabel value="First Name" />

                        <TextInput
                            className="mt-1 block w-full"
                            value={data.first_name}
                            onChange={(e) => setData("first_name", e.target.value)}
                            required
                            isFocused
                        />

                        <InputError className="mt-2" message={errors.first_name} />
                    </div>
                    <div>
                        <InputLabel value="Last Name" />

                        <TextInput
                            className="mt-1 block w-full"
                            value={data.last_name}
                            onChange={(e) => setData("last_name", e.target.value)}
                            required
                        />

                        <InputError className="mt-2" message={errors.last_name} />
                    </div>
                    <div>
                        <InputLabel value="Phone" />

                        <TextInput
                            className="mt-1 block w-full"
                            value={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                        />

                        <InputError className="mt-2" message={errors.phone} />
                    </div>

                    <div>
                        <InputLabel value="Email" />

                        <TextInput
                            type="email"
                            className="mt-1 block w-full"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            required
                            autoComplete="username"
                        />

                        <InputError className="mt-2" message={errors.email} />
                    </div>
                    <div className="flex items-center gap-4">
                        <PrimaryButton disabled={processing}>
                            Save
                        </PrimaryButton>
                    </div>
                </form>
            </section>
        </Wrapper>
    );
}
