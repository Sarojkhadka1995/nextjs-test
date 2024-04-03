import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';




const Test = () => {
    const router = useRouter();
    useEffect(() => {
        console.log('Test page =====')
    }, [])
    return (
        <>
            <p>This is a test page</p>
            <Link href="/test2">
                <button>CLICK TO VISIT TEST2  </button>
            </Link>
        </>
    );
};

export default Test;