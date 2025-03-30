import Wrapper from "./Components/Wrapper";
import Services from "./Home/Services";
import VideoGallery from "./Home/VideoGallery";
import Contact from "./Home/Contact";
import Banner from "./Home/Banner";
import Equipment from "./Home/Equipment";

export default function Home() {
    return (
        <Wrapper title="Homecare System">
            <Banner />
            <Services />
            <Equipment />
            <VideoGallery />
            <Contact />
        </Wrapper>
    );
}
