import { data } from "../data";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const Cart = () => {
  const [cartCount, setCartCount] = useState(0);
  const [itemCount, setItemCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const toggleIncrementBtn = () => {
    document.getElementById("increment").classList.remove("hidden");
  };

  const incrementCount = () => {
    const id = data.map((item) => item.id);
    console.log(id);
    const found = id.find((e) => e > 5);
    console.log(found);
  };

  incrementCount();

  console.log(selectedProduct);

  return (
    <main className="font-redHat text-rose900 bg-rose100 max-w-7xl w-full mx-auto p-5 md:p-10 flex flex-col lg:flex-row items-start gap-7">
      <section className="lg:w-3/4 w-full">
        <h1 className="font-bold text-3xl mb-5">Desserts</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-5">
          {data.map((item) => (
            <div key={item.id} className="">
              <div className="relative mb-5 flex flex-col items-center">
                <img src={item.image.desktop} className="rounded-xl w-72" />
                <button
                  onClick={() =>
                    setSelectedProduct((prevState) => [
                      ...prevState,
                      { ...item },
                    ])
                  }
                  className="flex gap-2 items-center justify-center py-1 px-3 rounded-full border-0 ring-1 ring-inset ring-rose500 absolute -bottom-4 w-40  bg-rose50 hover:ring-red hover:text-red"
                >
                  <img src="/images/icon-add-to-cart.svg" />
                  <p className="font-medium">Add to Cart</p>
                </button>
                <button
                  id="increment"
                  className="hidden items-center justify-between p-2 rounded-full border-0 absolute -bottom-4 w-40  bg-red"
                >
                  <img src="/images/icon-decrement-quantity.svg" />
                  <p className="text-rose100 text-sm">{itemCount}</p>
                  <img
                    onClick={incrementCount}
                    src="/images/icon-increment-quantity.svg"
                  />
                </button>
              </div>
              <div>
                <small className="text-rose500">{item.category}</small>
                <p className="font-medium">{item.name}</p>
                <p className="text-red font-medium">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white p-3 rounded-lg lg:w-1/4 md:w-1/2 w-full mx-auto">
        <h1 className="text-xl font-medium text-red mb-3">
          Your Cart({cartCount})
        </h1>
        {selectedProduct.length > 0 ? (
          <section>
            <div className="grid grid-cols-1 divide-y mb-3">
              {selectedProduct.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between text-sm py-2"
                >
                  <section>
                    <h1 className="font-medium">{product.name}</h1>
                    <div className="flex items-center gap-3">
                      <p>{}</p>
                      <p>@ ${product.price}</p>
                      <p>${}</p>
                    </div>
                  </section>
                  <button
                    onClick={() =>
                      setSelectedProduct(
                        selectedProduct.filter((p) => p.id !== product.id)
                      )
                    }
                    className="rounded-full p-1 ring-1 ring-gray-200"
                  >
                    <img src="/images/icon-remove-item.svg" alt="" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm">Order Total</p>
              <p>{}</p>
            </div>
            <div className="flex items-center justify-center gap-1 bg-rose50 p-1 text-sm rounded-md mb-3">
              <img src="/images/icon-carbon-neutral.svg" alt="" />
              <p>
                This is a <span className="font-medium">carbon neutral</span>{" "}
                delivery
              </p>
            </div>
            <button
              onClick={() => setOpen(true)}
              className="bg-red font-medium text-white p-3 w-full rounded-full"
            >
              Confirm Order
            </button>
          </section>
        ) : (
          <div>
            <img
              src="/images/illustration-empty-cart.svg"
              className="w-1/2 mx-auto"
            />
            <p className="text-center text-sm text-rose">
              Your added items will appear here
            </p>
          </div>
        )}

        <div>
          <ul></ul>
        </div>
      </section>

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-rose300 bg-opacity-45 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-rose50 p-6 shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:w-full md:max-w-md md:my-8 data-[closed]:md:translate-y-0 data-[closed]:md:scale-95"
            >
              <img src="/images/icon-order-confirmed.svg" className="size-8" />
              <DialogTitle className="text-2xl md:text-3xl font-bold">
                Order Confirmed
              </DialogTitle>
              <small className="text-rose500 mb-3 block">
                We hope you enjoy your food!
              </small>
              <div className="mb-3 bg-rose100 rounded-md p-2 text-xs grid grid-cols-1 divide-y divide-gray-200 gap-2">
                {selectedProduct.map((product) => (
                  <div key={product.id} className="flex items-center gap-2">
                    <img src={product.image.desktop} className="size-8" />
                    <div>
                      <div>
                        <p>{product.name}</p>
                        <div>
                          <p>{}</p>
                          <p>@ ${product.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setOpen(!open) & setSelectedProduct([])}
                className="text-rose100 bg-red rounded-full w-full py-2"
              >
                Start New Order
              </button>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </main>
  );
};

export default Cart;
