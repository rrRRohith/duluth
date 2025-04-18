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

export default function Index({ post }) {
    const { data, setData, post:save, errors, processing } = useForm({
        title: post?.title,
        handle: post?.handle,
        status: post?.status,
        content: post?.content,
        meta_title: post?.meta_title,
        meta_description: post?.meta_description,
        meta_keywords: post?.meta_keywords,
        _method: post ? "PUT" : "POST",
    });

    const [content, setContent] = useState(data.content);

    useEffect((e) => {
        setData('content', content);
    }, [content])

    const submit = (e) => {
        e.preventDefault();
        save(
            post
                ? route("admin.posts.update", post.id)
                : route("admin.posts.store")
        );
    };

    return (
        <Wrapper title={post ? "Edit post" : "Create new post"}>
            <section>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">
                            {post ? "Edit post" : "Create new post"}
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                            Manage your blog content posts.
                        </p>
                    </header>
                    <div className="mt-4 sm:mt-0">
                        <Link href={route("admin.posts.index")}>
                            <PrimaryButton>Back to posts</PrimaryButton>
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
                                <InputLabel value="Content" />

                                <ReactQuill
                                    theme="snow"
                                    value={content}
                                    onChange={setContent}
                                    style={{ height: "200px" }}
                                />
                                <div className="mb-14"></div>
                                <InputError
                                    className="mt-2"
                                    message={errors.content}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Meta title" />

                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.meta_title}
                                    onChange={(e) =>
                                        setData("meta_title", e.target.value)
                                    }
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.meta_title}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Meta description" />

                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.meta_description}
                                    onChange={(e) =>
                                        setData(
                                            "meta_description",
                                            e.target.value
                                        )
                                    }
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.meta_description}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Meta keywords" />

                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.meta_keywords}
                                    onChange={(e) =>
                                        setData("meta_keywords", e.target.value)
                                    }
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.meta_keywords}
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
                                        value: post?.status,
                                        label: post?.status,
                                    }}
                                    onChange={(e) => setData("status", e.value)}
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.status}
                                />
                            </div>

                            <div className="flex items-center gap-4">
                                <Link href={route("admin.posts.index")}>
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
