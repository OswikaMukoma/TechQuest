import Navbar from "../components/Navbar";
import FeaturedStory from "../components/FeaturedStory";
import useSpaceStory from "../hooks/useSpaceStory";

export default function Space() {
  const { story, loading } = useSpaceStory();

  if (loading) {
    return (
      <>
        <Navbar />
        <h1 className="text-center mt-20 text-3xl">
          Loading NASA...
        </h1>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-[#fafafa] min-h-screen pt-10">
        <FeaturedStory story={story} />
      </main>
    </>
  );
}