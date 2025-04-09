import Modal from "@/Components/Modal";
import ActionButton from "@/Components/ActionButton";

export default function Video({video, show, setShow}){
    return (
        <>
        <Modal show={show} onClose={() => {}} size="lg">
            <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center p-2">
                    <h2 className="text-xl font-medium text-gray-900">
                        {video?.title}
                    </h2>
                    <ActionButton onClick={() => {setShow(false)}}>
                        <i className="bi bi-x text-2xl"></i>
                    </ActionButton>
                </div>
                <video controls className="w-full h-auto">
                    <source src={video?.file_url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </Modal>
        </>        
    );
}