import React, { useState } from 'react'
import Controls from '../components/Controls';
import Table from '../components/Table';
import Modal from '../components/Modal';
import "../assets/styles/Challenge1.css"

const Challenge1 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [users, setUsers] = useState([]);

    const handleAddUser = (newUser) => {
        setUsers((prevUsers) => [...prevUsers, newUser]);
    };

    return (
        <main className="App">
            <Controls />
            <Table state={{ filteredRows: users }} />
            <section style={{ textAlign: "center", marginTop: "20px" }}>
                <button className="add-btn" onClick={() => setIsModalOpen(true)} >
                    <i className="fa-solid fa-plus"></i>  Add User
                </button>
                {isModalOpen && (
                    <Modal
                        onClose={() => setIsModalOpen(false)}
                        onSave={handleAddUser}
                    />
                )}
            </section>
        </main>
    )
}

export default Challenge1
