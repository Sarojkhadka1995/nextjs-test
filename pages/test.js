import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';




const Test = () => {
    const router = useRouter;
    useEffect(() => {
        router.refresh()
    }, [])
    return (
        <>
            <p>This is a test page</p>
            <Link href="/test2">
                <button>Click to VISIT Test2  </button>
            </Link>
        </>
    );
};

export default Test;