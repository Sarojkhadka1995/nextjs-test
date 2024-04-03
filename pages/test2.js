import Link from "next/link"


const Test2 = () => {
    return (
        <>
            <p> This is a test2 page</p>
            <Link href={"/test"}>
                <button> GOTO TEST PAGE</button>
            </Link>
        </>
    )
}

export default Test2
