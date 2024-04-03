import Link from 'next/link';

// async function fetchData() {
//     // Simulate fetching data from an API or database
//     const response = await fetch('https://api.example.com/data');
//     const data = await response.json();
//     return data;
// }

export async function getStaticProps() {
    // No data fetching here (intentionally empty)
    return {
        props: {}, // Return an empty object
        revalidate: 1, // Revalidate every 60 seconds (adjust as needed)
    };
}

const Test = () => {
    return (
        <>
            <p>This is a test page</p>
            <Link href="/test2">
                <button>Click here to vist Test2 page </button>
            </Link>
        </>
    );
};

export default Test;