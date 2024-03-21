import { LuShoppingCart } from "react-icons/lu";

const Header = () => {
    return (
        <div className="flex w-full fixed  rounded-s-sm shadow-md rounded-md bg-white h-14 justify-between items-center pr-3 pl-3">
            <a className="px-3 py-2  font-bold">AutoService</a>
            <LuShoppingCart className=" font-bold w-5 h-5" />
        </div>

    )
}
export default Header