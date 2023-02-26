import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
    return(
        <div className="bg-slate-900">
            <Navbar />
            <div className="px-12 bg-slate-900 md:px-16 lg:px-36">
                { children }
                <Footer />
            </div>
        </div>
    )
}