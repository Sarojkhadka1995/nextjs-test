import Head from "next/head";



const HomePage = ({ buildId }) => {
  return (
    <div>
      <p>Build ID: {buildId}</p>
    </div>
  );
};

HomePage.getInitialProps = async (ctx) => {
  // Access the buildId from the context
  const buildId = ctx.buildId;
  return { buildId };
};

export default HomePage;