import Media from "./Media";
import Blogs from "./Blogs";

const News = () => {
  return (
    <section className="section overlay" id="section8">
      <div className="mt-15 flex h-screen w-full flex-col gap-10 xl:mt-5 xl:gap-5 xl:p-25">
        {/* Top Half - Media Content */}
        <div className="w-full xl:h-1/2">
          <Media />
        </div>

        {/* Bottom Half - Blogs Content */}
        <div className="w-full xl:h-1/2">
          <Blogs />
        </div>
      </div>
    </section>
  );
};

export default News;
