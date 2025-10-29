
import axios from "axios";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { toast } from "react-toastify";


export interface FormField {
  name: string,
  email: string,
  cartItems: {
    _id: string,
    productId: {
      _id: string,
      name: string,
      price: string,
      image: string
    },
    qty: number,
    createdAt: string,
    updatedAt: string,
  }[]
}

export const BackendUrl = 'http://localhost:8080/api'
const ItemsContext = createContext<any>(undefined);

export const useItems = () => {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error("useItems must be used within an ItemsProvider");
  }
  return context;
};

export const ItemsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [allProducts, setAllProducts] = useState([])
  const [cartItems, setCartItems] = useState([])


  useEffect(() => { getAllProduct(), getAllCartItems() }, [])

  const getAllProduct = async () => {

    try {
      setLoading(true)
      const { data } = await axios.get(`${BackendUrl}/products`)
      setAllProducts(data?.allProducts)
      setLoading(false)
    } catch (error: any) {
      console.log('err in api', error)
      setLoading(false)

    }
  }
  const getAllCartItems = async () => {

    try {
      setLoading(true)
      const { data } = await axios.get(`${BackendUrl}/cart`)
      setCartItems(data?.allCartItems)
      setLoading(false)
    } catch (error: any) {
      console.log('err in api', error)
      setLoading(false)

    }
  }

  const handleAddToCart = async (productId: string) => {

    try {
      setLoading(true)
      const { data } = await axios.post(`${BackendUrl}/cart`, { productId })
      if (data) {
        toast.success(data?.message, { autoClose: 3000 });
        setLoading(false)
        await getAllCartItems()
      }

    } catch (error: any) {
      console.log('err in api', error)
      toast.error(error?.response?.data?.message, { autoClose: 3000 });
      setLoading(false)

    }
  }
  const handleRemoveItem = async (id: string) => {
    try {
      setLoading(true)
      const { data } = await axios.delete(`${BackendUrl}/cart/${id}`)
      if (data) {
        setLoading(false)
        toast.success(data?.message, { autoClose: 3000 });
        await getAllCartItems()
      }
    } catch (error: any) {
      console.log('err in api', error)
      toast.error(error?.response?.data?.message, { autoClose: 3000 });
      setLoading(false)

    }
  }


  const all_states = {
    loading,
    allProducts,
    cartItems
  };

  const all_api_controllers = {
    getAllCartItems,
    handleAddToCart,
    handleRemoveItem,
  };

  return (
    <ItemsContext.Provider value={{ ...all_states, ...all_api_controllers }}>
      {children}
    </ItemsContext.Provider>
  );
};
