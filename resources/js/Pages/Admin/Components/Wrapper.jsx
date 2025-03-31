import Layout from "./Layout";
import Nav from "./Nav";
import Aside from "./Aside";

export default function Wrapper({ children, title }) {
    return (
        <Layout title={title}>
            <div>
                <Nav />
                <Aside />
                <div className="p-4 sm:ml-64 mt-14">{children}</div>
            </div>
        </Layout>
    );
}
