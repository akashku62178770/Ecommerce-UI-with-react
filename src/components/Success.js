import { useState } from 'react';

const Success = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <button onClick={() => setShowPopup(true)}>Open Popup</button>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-lg font-medium mb-2">Order Successful</h2>
            <p className="mb-4">Thanks for ordering with us</p>
            <button className="bg-gray-200 px-3 py-2 rounded-lg" onClick={handlePopupClose}>
              Close Popup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Success 