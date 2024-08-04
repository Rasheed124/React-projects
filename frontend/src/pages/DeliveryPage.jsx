import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const DeliveryPage = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedMode, setSelectedMode] = useState("");
  const [detailedAddress, setDetailedAddress] = useState("");
  const [receiversName, setReceiversName] = useState("");
  const [receiversNumber, setReceiversNumber] = useState("");
  const [pickupNote, setPickupNote] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const savedForm = localStorage.getItem("deliveryForm");
    if (savedForm) {
      const formData = JSON.parse(savedForm);
      setSelectedState(formData.selectedState);
      setSelectedMode(formData.selectedMode);
      setDetailedAddress(formData.detailedAddress);
      setReceiversName(formData.receiversName);
      setReceiversNumber(formData.receiversNumber);
    }
  }, []);

  const handleSelectState = (event) => {
    setSelectedState(event.target.value);
    setSelectedMode("");
    setPickupNote("");
  };


  const handleSelectMode = (event) => {
    const mode = event.target.value;
    setSelectedMode(mode);

    if (selectedState === "Lagos" && mode === "Pick Up") {
      setPickupNote("Note: Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quas ad quod autem ab voluptatibus.");
    } else {
      setPickupNote("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      selectedState,
      selectedMode,
      detailedAddress,
      receiversName,
      receiversNumber,
    };
    localStorage.setItem("deliveryForm", JSON.stringify(formData));
    navigate("/confirm-order");
  };

  return (
    <div className="lg:bg-gray-800">
      <div className="bg-gray-200 shadow-lg fixed w-full z-20">
        <div className="flex items-center justify-between max-w-[1200px] m-auto px-3 py-2">
          <p className="text-black text-3xl">
            <Link to="/Cart">
              <IoIosArrowRoundBack />
            </Link>
          </p>
          <h2 className="text-black text-[1.1rem] uppercase">delivery details</h2>
          <div></div>
        </div>
      </div>
      <div className="pt-20">
        <div className="pb-7">
          <h2 className="text-center text-[1.1rem] font-semibold capitalize lg:text-gray-200 text-gray-900">
            Choose your Location
          </h2>
        </div>
        <div className="lg:pb-6">
          <form onSubmit={handleSubmit} className="px-3 max-w-[700px] lg:rounded-md m-auto lg:border border-gray-900 lg:pt-9 lg:bg-gray-300">
            <div className="custom-select mb-4">
              <select
                value={selectedState}
                onChange={handleSelectState}
                required
                className="selected-item flex items-center py-1 w-full bg-gray-200 px-3 rounded-md border-gray-800 border justify-between"
              >
                <option value="" disabled>Select State</option>
                <option value="State1">Lagos</option>
                <option value="State2">Ogun</option>
              </select>
            </div>
            {selectedState !== "" && (
              <div className="custom-select mb-4">
                <select
                  value={selectedMode}
                  required
                  onChange={handleSelectMode}
                  className="selected-item flex items-center w-full py-1 bg-gray-200 px-3 rounded-md border-gray-800 border justify-between"
                >
                  <option value="" disabled>Select Mode</option>
                  <option value="Pick Up">Pick Up</option>
                  <option value="Delivery">Delivery</option>
                  <option value="Installment Service">Installment Service</option>
                </select>
              </div>
            )}
         
            <div className="py-3 max-w-[700px] m-auto">
              <textarea
                id="details"
                name="details"
                value={detailedAddress}
                onChange={(e) => setDetailedAddress(e.target.value)}
                placeholder=" Detailed Address"
                required
                className="bg-gray-300 border placeholder:text-gray-700 w-full border-gray-600 rounded pl-4 pr-4 py-1 outline-none resize-none overflow-hidden"
              ></textarea>
            </div>
            <div className="pt-3">
              <input
                type="text"
                value={receiversName}
                onChange={(e) => setReceiversName(e.target.value)}
                required
                placeholder="Receiver's Name"
                className="outline-none border w-full placeholder:text-gray-800 border-gray-600 bg-gray-200 rounded pl-3 pr-4 py-1"
              />
            </div>
            <div className="pt-6">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={receiversNumber}
                onChange={(e) => setReceiversNumber(e.target.value)}
                required
                className="bg-gray-200 rounded placeholder:text-gray-800 w-full pl-4 pr-4 py-1 outline-none border border-gray-600"
                placeholder="Receiver's Number"
              />
            </div>
            <div className="py-4">
              <p className={`location ${selectedMode === "Pick Up" ? "" : "hidden"}`}>
                {pickupNote || "Note: Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quas ad quod autem ab voluptatibus."}
              </p>
              <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quas ad quod autem ab voluptatibus.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quas ad quod autem ab voluptatibus.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quas ad quod autem ab voluptatibus.</p>
            </div>
            <div className="bg-gray-100 lg:rounded-md sticky bottom-0 px-3 py-2 shadow-lg">
              <button type="submit" className="bg-gray-800 py-2 w-full rounded-md text-gray-100">
                Save
              </button>
            </div>
            <div className="py-10">
              <p className="text-center">In Partnership with txx</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
