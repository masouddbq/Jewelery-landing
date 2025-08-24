import React from 'react';
import { useCart } from '../../Context/CartContext';

const ProductCart = ({ isCartOpen, setIsCartOpen }) => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getTotalPrice, 
    clearCart 
  } = useCart();

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsCartOpen(false)}
        />
      )}
      
      {/* Cart Container */}
      <div className={`cart-container fixed top-0 right-0 w-80 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className='flex justify-between items-center p-4 border-b border-gray-200'>
          <button 
            className='text-red-500 text-xl font-bold hover:text-red-700 transition-colors duration-200' 
            onClick={() => setIsCartOpen(false)}
          >
            ×
          </button>
          <h1 className='font-bold text-black text-xl'>سبد خرید</h1>
          {cartItems.length > 0 && (
            <button 
              onClick={handleClearCart}
              className='text-sm text-red-500 hover:text-red-700 transition-colors duration-200'
            >
              پاک کردن
            </button>
          )}
        </div>
        
        {/* Cart Content */}
        <div className="p-4 h-full overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              <p>سبد خرید شما خالی است</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800 text-sm">{item.title}</h3>
                      <p className="text-main-green font-bold">{item.price}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="w-6 h-6 bg-main-green text-white rounded-full flex items-center justify-center text-sm hover:bg-base-green transition-colors"
                        >
                          -
                        </button>
                        <span className="text-gray-700 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="w-6 h-6 bg-main-green text-white rounded-full flex items-center justify-center text-sm hover:bg-base-green transition-colors"
                        >
                          +
                        </button>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-red-500 hover:text-red-700 text-sm mr-2"
                        >
                          حذف
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Cart Summary */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-gray-800">مجموع:</span>
                  <span className="font-bold text-main-green text-lg">{getTotalPrice().toFixed(2)}$</span>
                </div>
                <button className="w-full bg-gradient-to-r from-main-green to-base-green text-white py-3 rounded-lg font-medium hover:from-base-green hover:to-main-green transition-all duration-300">
                  تکمیل خرید
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCart;