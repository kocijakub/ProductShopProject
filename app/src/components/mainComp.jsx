import {Header} from "@/components/header";
import {CartSideBar} from "@/components/cartSideBar";

export function MainComp({ children }){
    return(
        <div>
            <div className={"mr-32"}>
                <Header/>
                <main>{children}</main>
            </div>
            <CartSideBar/>
        </div>
    )
}