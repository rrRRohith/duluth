import { Link } from "@inertiajs/react";
import { useRef, useEffect } from "react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function VideoCard({ video }) {
    const videoRef = useRef();
    const canvasRef = useRef();
    const randomTime = Math.floor(Math.random() * 10 + 2); // random frame between 2 and 12 seconds

    useEffect(() => {
        const vid = videoRef.current;
        const canvas = canvasRef.current;
        if (!vid || !canvas) return;

        const handleLoadedMetadata = () => {
            vid.currentTime = randomTime;
        };

        const handleSeeked = () => {
            const ctx = canvas.getContext("2d");
            canvas.width = vid.videoWidth;
            canvas.height = vid.videoHeight;
            ctx.drawImage(vid, 0, 0, canvas.width, canvas.height);
            vid.style.display = "none";
            canvas.style.display = "block";
        };

        vid.addEventListener("loadedmetadata", handleLoadedMetadata);
        vid.addEventListener("seeked", handleSeeked);

        return () => {
            vid.removeEventListener("loadedmetadata", handleLoadedMetadata);
            vid.removeEventListener("seeked", handleSeeked);
        };
    }, [randomTime]);

    return (
        <Link href={route("videos.show", {video:video.handle, type:video.type})} className="block">
            <div className="relative group">
                <div className="absolute p-2 top-0 end-0 z-10">
                    <PrimaryButton className="!text-sm !p-1 !py-0">
                        {video.type_label}
                    </PrimaryButton>
                </div>
                <div className="relative">
                    {video.thumbnail ? (
                        <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-64 object-cover rounded-lg"
                        />
                    ) : (
                        <>
                            <video
                                ref={videoRef}
                                src={video.video_url}
                                preload="metadata"
                                className="w-full h-64 object-cover rounded-lg"
                                muted
                            />
                            <canvas
                                ref={canvasRef}
                                className="w-full h-64 object-cover rounded-lg"
                                style={{ display: "none" }}
                            />
                        </>
                    )}

                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-play-circle w-16 h-16 text-white opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                        >
                            <circle cx={12} cy={12} r={10} />
                            <polygon points="10 8 16 12 10 16 10 8" />
                        </svg>
                    </div>
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900">
                    {video.title}
                </h3>
                <div className="line-clamp-2" dangerouslySetInnerHTML={{__html:video?.description?.replace(/(<([^>]+)>)/gi, '')}}></div>
            </div>
        </Link>
    );
}
