import React, { useState } from "react";
import { useTable } from "../store/context/TableContext";
import { toast } from "react-toastify";

const Modal = ({ onClose }) => {
  const { handleSave } = useTable();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSaveUser = async () => {
    if (!name || !address) {
      toast.error("Please fill out all fields");
      return;
    }

    const newUser = {
      name,
      address,
      created_on: new Date().toISOString(),
    };

    await handleSave(newUser);

    toast.success("User added successfully!");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Add New User</h3>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <div className="modal-buttons">
          <button onClick={onClose}>Close</button>
          <button onClick={handleSaveUser}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
