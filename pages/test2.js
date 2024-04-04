import Link from 'next/link';

const Test2 = () => {
  return (
    <>
      <p> This is a test2 page</p>
      <Link href={'/test'}>
        <button>TEST LINK with build id</button>
      </Link>
    </>
  );
};

export default Test2;
