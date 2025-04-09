import PrimaryButton from "@/Components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
import Wrapper from "../Components/Wrapper";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import Select from "react-select";
import { useState } from "react";
import Video from "./Video";

export default function Index({ video, types }) {
    // Convert types to react-select options
    const typeOptions = Object.entries(types).map(([value, label]) => ({
        value,
        label,
    }));

    const { data, setData, post, errors, processing } = useForm({
        title: video?.title,
        type: video?.type,
        //file: video?.file,
        _method: video ? "PUT" : "POST",
    });

    const submit = (e) => {
        e.preventDefault();
        post(
            video
                ? route("admin.videos.update", video.id)
                : route("admin.videos.store")
        );
    };

    const [showVideo, setShowVideo] = useState(false);

    return (
        <Wrapper title={video ? "Edit video" : "Create new video"}>
            <section>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">
                            {video ? "Edit video" : "Create new video"}
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                            Manage your video gallery here. You can add, edit,
                            or delete videos as needed.
                        </p>
                    </header>
                    <div className="mt-4 sm:mt-0">
                        <Link href={route("admin.videos.index")}>
                            <PrimaryButton>Back to videos</PrimaryButton>
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
                                    isFocused
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.title}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Type" />

                                <Select
                                    className="mt-1 block w-full"
                                    options={typeOptions}
                                    value={typeOptions.find(
                                        (option) => option.value === data.type
                                    )}
                                    onChange={(e) => setData("type", e.value)}
                                    required
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.type}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Video File" />

                                <div>
                                    <input
                                        onChange={(e) =>
                                            setData("video", e.target.files[0])
                                        }
                                        accept="video/*"
                                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
                                        type="file"
                                    />
                                    <p
                                        className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                                        id="file_input_help"
                                    >
                                        mp4,mov,avi,wmv(Max 20MB)
                                    </p>
                                </div>
                                {video && (
                                    <div onClick={(e) => {setShowVideo(true)}} className="text-blue-600 cursor-pointer">View uploaded video</div>
                                )}
                                <InputError
                                    className="mt-2"
                                    message={errors.file}
                                />
                            </div>
                            <div className="flex items-center gap-4">
                                <Link href={route("admin.videos.index")}>
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
            <Video video={video} show={showVideo} setShow={setShowVideo} />
        </Wrapper>
    );
}
