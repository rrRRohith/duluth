import PrimaryButton from "@/Components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
import Wrapper from "../Components/Wrapper";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import Select from "react-select";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState, useEffect, use } from "react";
import Checkbox from "@/Components/Checkbox";

export default function Index({ job, categories, qualifications, types, experiences }) {
    const { data, setData, post, errors, processing } = useForm({
        title: job?.title,
        description: job?.description,
        location: job?.location,
        close_date: job?.close_date,
        start_date: job?.start_date,
        email: job?.email,
        link: job?.link,
        status: job?.status,
        remote_position: job?.remote_position,
        types: job?.types?.map((type) => { type.id }),
        categories: job?.categories?.map((category) => { category.id }),
        experiences: job?.experiences?.map((experience) => { experience.id }),
        qualifications: job?.qualifications?.map((qualification) => { qualification.id }),
        _method: job ? "PUT" : "POST",
    });

    const [description, setDescription] = useState(data.description);

    useEffect((e) => {
        setData('description', description);
    }, [description])

    const submit = (e) => {
        e.preventDefault();
        post(
            job
                ? route("admin.jobs.update", job.id)
                : route("admin.jobs.store")
        );
    };

    return (
        <Wrapper title={job ? "Edit job" : "Create new job"}>
            <section>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">
                            {job ? "Edit job" : "Create new job"}
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                            Manage your job jobs.
                        </p>
                    </header>
                    <div className="mt-4 sm:mt-0">
                        <Link href={route("admin.jobs.index")}>
                            <PrimaryButton>Back to jobs</PrimaryButton>
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
                            <div className="mb-4">
                                <InputLabel value="Description" />

                                <ReactQuill
                                    theme="snow"
                                    value={description}
                                    onChange={setDescription}
                                    style={{ height: "200px" }}
                                />
                                <div className="mb-14"></div>
                                <InputError
                                    className="mt-2"
                                    message={errors.description}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Location(optional)" />
                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.location}
                                    onChange={(e) =>
                                        setData("location", e.target.value)
                                    }
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.location}
                                />
                            </div>

                            <div className="mb-4">
                                <div className="flex gap-1 items-center">
                                    <Checkbox
                                        id="remote_position"
                                        checked={data.remote_position}
                                        onChange={(e) =>
                                            setData(
                                                "remote_position",
                                                e.target.checked
                                            )
                                        }
                                    />
                                    <InputLabel htmlFor="remote_position" value="Remote position" />
                                </div>
                                <InputError
                                    className="mt-2"
                                    message={errors.remote_position}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Job Categories" />

                                <Select
                                    className="mt-1 block w-full"
                                    options={categories}
                                    defaultValue={categories.filter((category) => {
                                        return job?.categories?.some((jobCategory) => {
                                            return jobCategory == category.id
                                        })
                                    }
                                    )}
                                    isMulti
                                    onChange={(e) => setData("categories", e.value)}
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.categories}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Job Types" />

                                <Select
                                    className="mt-1 block w-full"
                                    options={types}
                                    defaultValue={types.filter((type) => {
                                        return job?.types?.some((jobType) => {
                                            return jobType == type.id
                                        })
                                    }
                                    )}
                                    isMulti
                                    onChange={(e) => setData("types", e.value)}
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.status}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Experiences" />

                                <Select
                                    className="mt-1 block w-full"
                                    options={experiences}
                                    defaultValue={experiences.filter((experience) => {
                                        return job?.experiences?.some((jobExperience) => {
                                            return jobExperience == experience.id
                                        })
                                    }
                                    )}
                                    isMulti
                                    onChange={(e) => setData("experiences", e.value)}
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.experiences}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Qualifications" />

                                <Select
                                    className="mt-1 block w-full"
                                    options={qualifications}
                                    defaultValue={qualifications.filter((qualification) => {
                                        return job?.qualifications?.some((jobQualification) => {
                                            return jobQualification == qualification.id
                                        })
                                    }
                                    )}
                                    isMulti
                                    onChange={(e) => setData("qualifications", e.value)}
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.qualifications}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Application Close Date(optional)" />
                                <TextInput
                                    type="date"
                                    className="mt-1 block w-full"
                                    value={data.close_date}
                                    onChange={(e) =>
                                        setData("close_date", e.target.value)
                                    }
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.close_date}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Job Start Date(optional)" />
                                <TextInput
                                    type="date"
                                    className="mt-1 block w-full"
                                    value={data.start_date}
                                    onChange={(e) =>
                                        setData("start_date", e.target.value)
                                    }
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.start_date}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Email for applications(optional)" />
                                <TextInput
                                    type="email"
                                    className="mt-1 block w-full"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.email}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="External link for application(optional)" />
                                <TextInput
                                    type="url"
                                    className="mt-1 block w-full"
                                    value={data.link}
                                    onChange={(e) =>
                                        setData("link", e.target.value)
                                    }
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.link}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Status" />

                                <Select
                                    className="mt-1 block w-full"
                                    options={[
                                        { value: "draft", label: "draft" },
                                        {
                                            value: "published",
                                            label: "published",
                                        },
                                    ]}
                                    defaultValue={{
                                        value: job?.status,
                                        label: job?.status,
                                    }}
                                    onChange={(e) => setData("status", e.value)}
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.status}
                                />
                            </div>

                            <div className="flex items-center gap-4">
                                <Link href={route("admin.jobs.index")}>
                                    <SecondaryButton job="button">
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
