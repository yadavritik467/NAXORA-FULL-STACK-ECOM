
import { ShoppingCart, Trash2 } from 'lucide-react';
const MyOrder = ({ cartItems, onRemoveItem, onBack }: any) => {
    const subtotal = cartItems.reduce((sum: any, item: any) => sum + (parseInt(item?.productId.price) * item?.qty), 0);

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">My Order List</h1>

                {cartItems.length === 0 ? (
                    <div className="text-center py-16 bg-white rounded-xl shadow-md">
                        <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-600 mb-2">Your cart is empty</h2>
                        <p className="text-gray-500 mb-6">Add some products to get started!</p>
                        <button
                            onClick={onBack}
                            className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition"
                        >
                            Start Shopping
                        </button>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-4">
                            {cartItems.map((item: any) => (
                                <div key={item?.productId._id} className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4">
                                    <img
                                        src={item?.productId.image}
                                        alt={item?.productId.name}
                                        className="w-24 h-24 object-contain bg-gray-50 rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{item?.productId.name}</h3>
                                        <p className="text-xl font-bold text-purple-600">₹{parseInt(item?.productId.price).toLocaleString('en-IN')}</p>
                                        <p className="text-sm font-semibold text-gray-800 mb-1">Quantity {item?.qty}</p>
                                    </div>

                                    <button
                                        onClick={() => onRemoveItem(item?.productId?._id)}
                                        className="p-2 text-red-500 cursor-pointer hover:bg-red-50 rounded-lg"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                                <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span>₹{subtotal.toLocaleString('en-IN')}</span>
                                    </div>
                                </div>
                                <button className="w-full bg-linear-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition">
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyOrder