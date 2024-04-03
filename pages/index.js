import Head from "next/head";
import { revalidatePath } from 'next/cache'




const HomePage = ({ buildId }) => {
  revalidatePath('/', 'layout')
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