import Link from 'next/link';




const Test = () => {
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