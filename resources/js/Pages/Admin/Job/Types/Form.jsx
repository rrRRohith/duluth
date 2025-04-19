import PrimaryButton from "@/Components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
import Wrapper from "../../Components/Wrapper";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";

export default function Index({ type }) {
    const { data, setData, post, errors, processing } = useForm({
        title: type?.title,
        _method: type ? "PUT" : "POST",
    });

    const submit = (e) => {
        e.preventDefault();
        post(
            type
                ? route("admin.jobs.types.update", type.id)
                : route("admin.jobs.types.store")
        );
    };

    return (
        <Wrapper title={type ? "Edit type" : "Create new type"}>
            <section>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">
                            {type ? "Edit type" : "Create new type"}
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                            Manage your job types.
                        </p>
                    </header>
                    <div className="mt-4 sm:mt-0">
                        <Link href={route("admin.jobs.types.index")}>
                            <PrimaryButton>Back to types</PrimaryButton>
                        </Link>
                    </div>
                </div>
                <div className="mt-6 space-y-6">
                    <div className="max-w-xl">
                        <form onSubmit={submit} className="mt-6 space-y-6">
                            <div className="mb-4">
                                <InputLabel value="Title" />
                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.title}
                                />
                            </div>
                            

                            <div className="flex items-center gap-4">
                                <Link href={route("admin.jobs.types.index")}>
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
