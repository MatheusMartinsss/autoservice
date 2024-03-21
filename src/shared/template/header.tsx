import { LuShoppingCart } from "react-icons/lu";

const Header = () => {
    return (
        <div className="flex w-full fixed bg-slate-50 shadow-xl rounded-b-sm h-14 justify-between items-center pr-3 pl-3">
            <h4 className="font-bold text-xl">AutoService</h4>
            <LuShoppingCart className="text-2xl"/>
        </div>

    )
}
export default Header