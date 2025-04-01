import Layout from "./Layout";
import Nav from "./Nav";
import Aside from "./Aside";

export default function Wrapper({ children, title }) {
    return (
        <Layout title={title}>
            <div>
                <Nav />
                <Aside />
                <div className="p-4 sm:ml-64 mt-14 ">
                    <div className="bg-white rounded-lg shadow-md p-6 space-y-6 transition-all duration-300">
                        {children}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
