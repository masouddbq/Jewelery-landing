import { CartProvider } from './Context/CartContext';
import Store from './store/Store';

function App() {
  return (
    <CartProvider>
      <Store />
    </CartProvider>
  );
}

export default App;
