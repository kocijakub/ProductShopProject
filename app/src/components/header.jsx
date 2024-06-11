import Link from "next/link";

export function Header(){
    return(
        <header className={"flex justify-between items-center h-14 px-4 bg-gray-500"}>
            <div>
                <Link href={"/"}>Custom Shop</Link>
            </div>
            <div>
                <Link href={"/cart"}>Cart</Link>
                <span className={"cart-badge"}>0</span>
            </div>
        </header>
    )
}