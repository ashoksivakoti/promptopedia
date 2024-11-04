import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
    Promptopedia is a platform to discover, share, and create creative prompts, empowering users to spark ideas and inspire content
    </p>

    <Feed />
  </section>
);

export default Home;
