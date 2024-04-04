import Link from 'next/link';

const Test2 = () => {
  return (
    <>
      <p> This is a test2 page</p>
      <Link href={'/test'} prefetch={false}>
        <button>TEST LINK</button>
      </Link>
    </>
  );
};

export default Test2;
