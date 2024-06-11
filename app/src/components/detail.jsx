import Link from "next/link";

export function Detail({id, title}){
    return(
        <div className={"border-black border-2 bg-blue-300 text-blue-950 flex flex-col items-center p-20 m-10"}>
            <p>{id}</p>
            <strong>{title}</strong>
            <Link href={"/"}>Go back</Link>
        </div>
    )
}