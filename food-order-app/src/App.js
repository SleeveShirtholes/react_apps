import { useState } from "react";
import AvailableMeals from "./components/AvailableMeals/AvailableMeals";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import MealSummary from "./components/MealSummary/MealSummary";
import CartProvider from "./store/CartProvider";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function App() {
  const [showCart, setShowCart] = useState(false);

  function showCartHandler() {
    setShowCart(true);
  }

  function hideCartHandler() {
    setShowCart(false);
  }

  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <MealSummary />
      <AvailableMeals meals={DUMMY_MEALS} />
    </CartProvider>
  );
}

export default App;
