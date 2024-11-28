import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const ConfirmOrder = () => {
  const [open, setOpen] = useState(true);
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-rose500 bg-opacity-25 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-rose50 p-5 shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:w-full md:max-w-lg md:my-8 data-[closed]:md:translate-y-0 data-[closed]:md:scale-95"
          >
            <img src="/images/icon-order-confirmed.svg" className="size-8" />
            <DialogTitle className="text-2xl md:text-3xl font-bold">
              Order Confirmed
            </DialogTitle>
            <small className="text-rose500 mb-3">
              We hope you enjoy your food!
            </small>
            <div className="mb-3"></div>
            <button
              onClick={(e) => setOpen(!open)}
              className="text-rose100 bg-red rounded-full w-full py-2"
            >
              Start New Order
            </button>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default ConfirmOrder;
