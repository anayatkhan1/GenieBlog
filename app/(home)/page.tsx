import AllBlogs from "@/components/all-blogs";
import Generate from "@/components/generate";

export const maxDuration = 10;
const Home = async () => {
    return (
        <section className="py-24">
            <div className="container">
                <Generate />
                <AllBlogs />
            </div>
        </section>
    );
};

export default Home;
