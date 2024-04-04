import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Test = () => {
  const router = useRouter();

  return (
    <>
      <p>This is a test page</p>
      <Link href="/test2">
        <button>TEST2 build check 1</button>
      </Link>
    </>
  );
};

export default Test;
