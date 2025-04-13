import { usePage } from "@inertiajs/react";
import VideoCard from "../Videos/VideoCard";

export default function VideoGallery() {
    const { videos } = usePage().props;
    const {home_page_settings} =  usePage().props;
    return (
        <>
            <div id="videos" className="bg-gray-50">
                <div className="container m-auto px-4 py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            {home_page_settings?.video?.title}
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                           {home_page_settings?.video?.description}
                        </p>
                    </div>
                    <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
            </div>
        </>
    );
}
