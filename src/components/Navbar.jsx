import CartWidget from "./CartWidget.jsx";

const Navbar = () => {
    return (
        <nav className="bg-gray-700">
            <div><span className="text-white font-bold pl-4 ">Comercio Reactivo</span></div>
            <div class="flex justify-end list-none gap-6 pr-20">
                <div><li className="text-white font-black"><a href="#">Inicio</a></li></div>
                <div><li className="text-white font-black"><a href="#">Producto</a></li></div>
                <div><li className="text-white font-black"><a href="#">Contacto</a></li></div>        
               <CartWidget/>
            </div>
        </nav>
    );
}

export default Navbar;