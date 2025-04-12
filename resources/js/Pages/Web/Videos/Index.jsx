import PrimaryButton from "@/Components/PrimaryButton";
import Wrapper from "../Components/Wrapper";
import VideoCard from "./VideoCard";
import SecondaryButton from "@/Components/SecondaryButton";
import { Link, usePage } from "@inertiajs/react";
import ActionButton from "@/Components/ActionButton";
import Select from "react-select";
import { router } from "@inertiajs/react";

export default function Index({ videos, types, type }) {
    const title = type ? `${type.title} Video Gallery` : "Video Gallery";

    const searchParams = new URLSearchParams(window.location.search);
    const category = searchParams.get("sort") || "popular";

    const {routeName} = usePage().props;

    const sortOptions = [
        { value: "popular", label: "Popular" },
        { value: "latest", label: "Latest" },
        { value: "oldest", label: "Oldest" },
    ];
    const selectedSortion =
        sortOptions.find(
            (option) => option.value == category
        ) || sortOptions[0];

    const handleSortChange = (selectedOption) => {
        router.get(route(routeName, {sort: selectedOption.value, type: type?.handle}));
    }
    return (
        <Wrapper title={title}>
            <div className="container m-auto px-4 py-44 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        {title}
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Watch our informative videos about our services and
                        equipment
                    </p>
                </div>
                <div className="flex gap-2 items-center">
                    {Object.entries(types).map(([key, value]) => (
                        <Link href={route("videos.type", key)}>
                            {key == type?.handle ? (
                                <PrimaryButton>{value}</PrimaryButton>
                            ) : (
                                <SecondaryButton>{value}</SecondaryButton>
                            )}
                        </Link>
                    ))}
                    {type && (
                        <Link href={route("videos.index")}>
                            <ActionButton>
                                <i className="bi bi-x-lg" />
                            </ActionButton>
                        </Link>
                    )}
                </div>
                <div className="flex justify-start mt-4">
                    <Select onChange={handleSortChange} defaultValue={selectedSortion} options={sortOptions}></Select>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {videos.length ? (
                        <>
                            {videos.map((video) => (
                                <VideoCard key={video.id} video={video} />
                            ))}
                        </>
                    ) : (
                        <div className="col-span-3 text-center py-12">
                            <h3 className="text-xl font-medium text-gray-900">
                                No videos available at the moment.
                            </h3>
                        </div>
                    )}
                </div>
            </div>
        </Wrapper>
    );
}
