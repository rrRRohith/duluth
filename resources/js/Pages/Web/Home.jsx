import Layout from "./Components/Layout";
import Services from "./Home/Services";
import VideoGallery from "./Home/VideoGallery";
import Contact from "./Home/Contact";
import Banner from "./Home/Banner";
import Equipment from "./Home/Equipment";

export default function Home() {
    return (
        <Layout title="Homecare System">
            <Banner />
            <Services />
            {/* <Equipment /> */}
            <VideoGallery />
            <Contact />
        </Layout>
    );
}
