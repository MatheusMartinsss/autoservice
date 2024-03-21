

export default function ProductList() {
    return (
        <div className="flex flex-col w-full rounded-md ">
            <div className="flex flex-row mb-2">
                <a className="px-3 py-2  text-lg text-slate-900 font-bold">Lanches</a>
            </div>
            <li className="flex rounded-md h-24 shadow-md bg-white hover:drop-shadow-lg ">
                <div className="flex rounded-lg  h-full w-2/4">
                    <img className="flex rounded-md" src="https://www.assai.com.br/sites/default/files/shutterstock_1806472312.jpg"></img>
                </div>
                <div className="h-full w-3/4 flex flex-col">
                    <div>
                        <a className="font-bold text-lg">Hamburguer</a>
                    </div>
                    <div>
                        <a className="font-normal text-sm">Hamburguer especial da casa</a>
                    </div>
                    <div>

                    </div>
                </div>
            </li>
        </div>
    )
}