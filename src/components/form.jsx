import React, { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore/lite"; // Import from "lite" version
import { getFirestore } from "firebase/firestore/lite"; // Import getFirestore from "lite" version
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDiOqUAHF9DX9x-VdRhaGPc2_Yfj305Jxc",
  authDomain: "netbet-ea33f.firebaseapp.com",
  databaseURL:
    "https://netbet-ea33f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "netbet-ea33f",
  storageBucket: "netbet-ea33f.appspot.com",
  messagingSenderId: "184670151760",
  appId: "1:184670151760:web:08506858f2b8843fb19d55",
  measurementId: "G-7FX1PZEFQW",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Form = () => {
  const [formData, setFormData] = useState({
    _name: "",
    _lastName: "",
    _city: "",
    _street: "",
    _nrStreet: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(""); // State to hold error message
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!isFormValid()) {
      setIsLoading(false);
      return;
    }

    try {
      const docRef = await addDoc(
        collection(db, "batalia2023_premii"),
        formData
      );
      setFormData({
        _name: "",
        _lastName: "",
        _city: "",
        _street: "",
        _nrStreet: "",
      });

      setIsLoading(false);
      setIsSubmitted(true);
      setError(""); // Clear the error message
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding data to Firestore:", error);
      setIsLoading(false);
    }
  };
  const closePopup = () => {
    setIsSubmitted(false);
  };

  const isFormValid = () => {
    if (
      formData._name.trim() === "" ||
      formData._lastName.trim() === "" ||
      formData._city === "" ||
      formData._street === "" ||
      formData._nrStreet === ""
    ) {
      setError("Please fill in all fields.");
      return false;
    }
    return true;
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const baseInputStyles = {
    base: "block w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 block appearance-none leading-normal focus:border-blue-400",
    tablet: "test1",
    mobile: "test2",
  };
  const baseInputsLabe =
    "absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-out bg-white px-2 text-grey-darker";

  let inputClass;

  if (windowWidth <= 520) {
    inputClass = baseInputStyles.mobile;
  } else if (windowWidth <= 728) {
    inputClass = baseInputStyles.tablet;
  } else {
    inputClass = baseInputStyles.base;
  }

  return (
    <section className="bg-slate-300">
      <div className="max-w-7xl mx-auto item-center">
        <div className="container p-[15px] ">
          <div className="flex flex-col items-center">
            <h1>Lorem ipsum inmpusmmlo </h1>
            <p>"lorem"</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:w-[90%] md:w-[100%]  d-flex items-center mx-auto mt-[5%] p-2 bg-white rounded-md"
          >
            <div className="p-2">
              <div className="container-name flex flex-row space-x-4">
                <div className="relative float-label-input w-1/2">
                  <input
                    id="name"
                    type="text"
                    name="_name"
                    placeholder=""
                    value={formData._name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <label for="_name" class={baseInputsLabe}>
                    Nume
                  </label>
                </div>
                <div className="relative float-label-input w-1/2">
                  <input
                    type="text"
                    name="_lastName"
                    placeholder=""
                    value={formData._lastName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <label for="_lastName" class={baseInputsLabe}>
                    Prenume
                  </label>
                </div>
              </div>
              <div className="container-address flex flex-row space-x-4">
                <div className="relative float-label-input w-1/2">
                  <input
                    type="text"
                    name="_city"
                    placeholder=""
                    value={formData._city}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <label for="_city" class={baseInputsLabe}>
                    Oras
                  </label>
                </div>
                <div className="relative float-label-input w-full">
                  <input
                    type="text"
                    name="_street"
                    placeholder=""
                    value={formData._street}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <label for="_street" class={baseInputsLabe}>
                    Strada
                  </label>
                </div>
                <div className="relative float-label-input w-1/4">
                  <input
                    type="text"
                    name="_house"
                    placeholder=""
                    value={formData._house}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <label for="_house" class={baseInputsLabe}>
                    Bloc
                  </label>
                </div>
              </div>
              <div className="container-info flex flex-row w-full space-x-4 items-center">
                <div className="relative float-label-input w-1/4">
                  <input
                    type="text"
                    name="_nrStreet"
                    placeholder=""
                    value={formData._nrStreet}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <label for="_nrStreet" class={baseInputsLabe}>
                    Nr
                  </label>
                </div>
                <div className="relative float-label-input w-1/4">
                  <input
                    type="text"
                    name="_house"
                    placeholder=""
                    value={formData._house}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <label for="_house" class={baseInputsLabe}>
                    Bloc
                  </label>
                </div>
                <div className="relative float-label-input w-1/4">
                  <input
                    type="text"
                    name="_floor"
                    placeholder=""
                    value={formData._floor}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <label for="_floor" class={baseInputsLabe}>
                    Etaj
                  </label>
                </div>
                <div className="relative float-label-input w-1/4">
                  <input
                    type="number"
                    name="number3"
                    placeholder=""
                    value={formData.number4}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <label for="name" class={baseInputsLabe}>
                    Cod Postal
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-1/4"
              >
                Submit
              </button>
            </div>
          </form>

          {error && <div className="error-message">{error}</div>}

          {isLoading && <div>Loading...</div>}

          {isSubmitted && (
            <div className="popup">
              <div className="popup-content">
                <span className="close" onClick={closePopup}>
                  &times;
                </span>
                <p>Thank you for your submission!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Form;
