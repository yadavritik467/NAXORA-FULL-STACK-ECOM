const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-16">
            <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                            TechStore
                        </h3>
                        <p className="text-gray-400">Your one-stop shop for all tech needs. Quality products at great prices.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-purple-400 transition">About Us</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition">Contact</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition">FAQs</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition">Shipping</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Categories</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-purple-400 transition">Audio</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition">Gaming</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition">Accessories</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition">Wearables</a></li>
                        </ul>
                    </div>

                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 TechStore. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer