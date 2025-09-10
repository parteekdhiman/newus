import React, { useEffect, useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const OneTimePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasClosedThisLoad = sessionStorage.getItem("oneTimePopupClosed");
    if (!hasClosedThisLoad) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("oneTimePopupClosed", "1");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-[90%] p-6 relative">
        <button
          aria-label="Close"
          onClick={handleClose}
          className="absolute top-3 right-3 rounded-full w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200"
        >
          ✕
        </button>
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-xl font-semibold text-gray-900">Welcome to Newus!</h3>
        </div>
        <LazyLoadImage
          src="https://newus.in/static/media/popup.bc06f1a66f059a86c0be.png"
          alt="Newus banner"
          className="w-full h-full object-contain mb-4"
          effect="blur"
        />
        <div className="flex gap-3">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScxu8Xezl0sTwJulIjZQ7H2J5uwjsLNz4G3d9QJD9YArXveVg/viewform"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-4 py-2 hover:bg-blue-700"
            onClick={handleClose}
            target="_blank"
          >
            Registration Form
          </a>
          <button
            onClick={handleClose}
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default OneTimePopup;


