
import { Heart, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useItems } from '../ContextApi/ItemContext';



// Product Card Component
const ProductCard = ({ product, onAddToCart }: any) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-300"
                    style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
                />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition">
                    <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                </button>
            </div>
            <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                    {product.name}
                </h3>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-purple-600">
                        ₹{parseInt(product.price).toLocaleString('en-IN')}
                    </span>
                    <button
                        onClick={() => onAddToCart(product?._id)}
                        className="cursor-pointer bg-linear-to-r from-purple-600 to-blue-600 text-white px-5 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2"
                    >
                        <ShoppingCart className="w-4 h-4" />
                        <span>Add</span>
                    </button>
                </div>
            </div>
        </div>
    );
};


const Home = () => {
    const { allProducts, handleAddToCart } = useItems()
    return (
        <div className="min-h-screen bg-linear-to-br from-purple-50 via-white to-blue-50">
            {/* Hero Section */}
            <div className="bg-linear-to-r from-purple-600 to-blue-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Welcome to TechStore
                    </h1>
                    <p className="text-xl md:text-2xl text-purple-100 mb-8">
                        Discover Amazing Tech Products at Great Prices
                    </p>
                    <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105">
                        Shop Now
                    </button>
                </div>
            </div>

            {/* Products Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex max-sm:flex-wrap gap-4 items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
                    <div className="flex space-x-2">
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">All</button>
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Audio</button>
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Gaming</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {allProducts.map((product: any) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                            onAddToCart={handleAddToCart}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home