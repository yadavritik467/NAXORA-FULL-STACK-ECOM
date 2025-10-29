import { Heart, Menu, Search, ShoppingCart, User, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useItems } from '../ContextApi/ItemContext';
const Navbar = () => {
    const {cartItems} = useItems()
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            TechStore
                        </h1>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-purple-600 transition">Home</Link>
                        <Link to="/" className="text-gray-700 hover:text-purple-600 transition">Products</Link>
                        <Link to="/" className="text-gray-700 hover:text-purple-600 transition">Categories</Link>
                        <Link to="/my-order" className="text-gray-700 hover:text-purple-600 transition">My Order</Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/" className="p-2 hover:bg-gray-100 rounded-full transition">
                            <Search className="w-5 h-5 text-gray-600" />
                        </Link>
                        <Link to="/" className="p-2 hover:bg-gray-100 rounded-full transition">
                            <Heart className="w-5 h-5 text-gray-600" />
                        </Link>
                        <Link to="/" className="p-2 hover:bg-gray-100 rounded-full transition">
                            <User className="w-5 h-5 text-gray-600" />
                        </Link>
                        <Link to="/cart"
                            className="relative p-2 hover:bg-gray-100 rounded-full transition"
                        >
                            <ShoppingCart className="w-5 h-5 text-gray-600" />
                            {cartItems?.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {cartItems?.length}
                                </span>
                            )}
                        </Link>
                    </div>

                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-4 py-3 space-y-3">
                        <Link to="/" className="block text-gray-700 hover:text-purple-600">Home</Link>
                        <Link to="/" className="block text-gray-700 hover:text-purple-600">Products</Link>
                        <Link to="/" className="block text-gray-700 hover:text-purple-600">Categories</Link>
                        <Link to="/my-order" className="block text-gray-700 hover:text-purple-600">My Order</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar