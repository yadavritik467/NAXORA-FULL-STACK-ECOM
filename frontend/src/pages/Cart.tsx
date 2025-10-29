
import { ShoppingCart, Trash2, X } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { BackendUrl, useItems, type FormField } from '../ContextApi/ItemContext';
import axios from 'axios';
import { toast } from 'react-toastify';
const Cart = () => {
    const { cartItems, handleRemoveItem, getAllCartItems } = useItems()
    const subtotal = cartItems.reduce((sum: any, item: any) => sum + (parseInt(item?.productId.price) * item?.qty), 0);

    const [openModal, setOpenModal] = useState(false)
    const [receiptModal, setReceiptModal] = useState(false)
    const [receipt, setReceipt] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")


    const checkOutHandler = async (e: FormEvent<HTMLFormElement>, formField: FormField) => {
        e.preventDefault()
        try {
            setLoading(true)
            const { data } = await axios.post(`${BackendUrl}/checkout`, formField)
            if (data) {
                setLoading(false)
                setOpenModal(false)
                setReceipt(data?.receipt)
                setReceiptModal(true)
                toast.success(data?.message, { autoClose: 3000 });
                await getAllCartItems()
            }
        } catch (error: any) {
            console.log('err in api', error)
            toast.error(error?.response?.data?.message, { autoClose: 3000 });
            setLoading(false)

        }
    }
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

                {cartItems.length === 0 ? (
                    <div className="text-center py-16 bg-white rounded-xl shadow-md">
                        <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-600 mb-2">Your cart is empty</h2>
                        <p className="text-gray-500 mb-6">Add some products to get started!</p>
                        <Link
                            to="/"
                            className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition"
                        >
                            Start Shopping
                        </Link>
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
                                        onClick={() => handleRemoveItem(item?.productId?._id)}
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
                                <button onClick={() => setOpenModal(true)} className="w-full cursor-pointer bg-linear-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition">
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* checkout modal */}
            {
                openModal && <div className='w-full h-screen fixed top-0 left-0  flex justify-center items-center bg-black/50'>
                    <form
                        onSubmit={(e) => checkOutHandler(e, { name, email, cartItems })}
                        className="relative w-[90%] md:w-[50%] bg-gray-50 p-8 rounded-3xl shadow-2xl flex flex-col gap-5"
                    >

                        <button
                            type="button"
                            onClick={() => setOpenModal(false)}
                            className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-gray-800 transition"
                        >
                            <X size={26} />
                        </button>

                        {/* 🏷️ Header */}
                        <h2 className="text-2xl font-semibold text-center text-gray-800">
                            Checkout Details
                        </h2>

                        {/* 👤 Name Input */}
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-gray-600 mb-1 font-medium">
                                Full Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your full name"
                                className="p-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* 📧 Email Input */}
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-gray-600 mb-1 font-medium">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="p-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`mt-4 flex cursor-pointer justify-center items-center bg-blue-600 text-white py-3 rounded-xl font-semibold transition-all ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700"
                                }`}
                        >
                            {loading ? (
                                // 🔄 Small white spinner
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                "Confirm Checkout"
                            )}
                        </button>
                    </form>
                </div>
            }
            {/* receipt modal */}
            {
                receiptModal && <div className='w-full h-screen fixed top-0 left-0  flex justify-center items-center bg-black/50'>
                    <div className="w-[90%] sm:w-[500px] bg-white rounded-2xl p-6 shadow-2xl relative animate-fadeIn">

                
                        <button
                            onClick={() => { setReceipt(null), setReceiptModal(false) }}
                            className="absolute cursor-pointer top-4 right-4 text-gray-600 hover:text-red-500 transition"
                        >
                            <X size={22} />
                        </button>

                        {/* 🧾 Header */}
                        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
                            Order Receipt
                        </h2>
                        <p className="text-sm text-center text-gray-500 mb-6">
                            Order ID: <span className="font-medium">{receipt.orderId}</span>
                        </p>

                        {/* 👤 Customer Info */}
                        <div className="border rounded-lg p-3 mb-4 bg-gray-50">
                            <p className="text-gray-700 text-sm">
                                <span className="font-semibold">Name:</span> {receipt.customer.name}
                            </p>
                            <p className="text-gray-700 text-sm">
                                <span className="font-semibold">Email:</span> {receipt.customer.email}
                            </p>
                            <p className="text-gray-700 text-sm">
                                <span className="font-semibold">Date:</span>{" "}
                                {new Date(receipt.timestamp).toLocaleString()}
                            </p>
                        </div>


                        <div className="max-h-48 overflow-y-auto mb-4 border rounded-lg p-3 bg-gray-50">
                            {receipt.items.map((item: any, index: number) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center text-gray-700 text-sm mb-2 border-b pb-2 last:border-none"
                                >
                                    <div>
                                        <p className="font-medium">{item.name}</p>
                                        <p className="text-xs text-gray-500">
                                            ₹{item.price} × {item.qty}
                                        </p>
                                    </div>
                                    <p className="font-semibold">₹{item.subtotal}</p>
                                </div>
                            ))}
                        </div>


                        <div className="flex justify-between items-center border-t pt-3">
                            <p className="text-lg font-semibold text-gray-800">Total:</p>
                            <p className="text-lg font-bold text-green-600">₹{receipt.totalAmount}</p>
                        </div>


                        
                    </div>
                </div>
            }
        </div>
    );
};

export default Cart