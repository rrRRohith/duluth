import Footer from "./Footer";
import Header from "./Header";
import Layout from "./Layout";

export default function Wrapper({ children, title }) {
    return (
        <Layout title={title}>
            <Header />
            {children}
            <Footer />
        </Layout>
    );
}
