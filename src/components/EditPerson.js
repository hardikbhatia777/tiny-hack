import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditPerson(props) {
    const [name, setName] = useState(props.name);
    const [role, setRole] = useState(props.role);
    const [email, setEmail] = useState(props.email);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button
                onClick={handleShow}
                className="px-4 py-1 text-sm text-[#193C36] font-semibold rounded-full border border-[#193C36] hover:text-white hover:bg-[#193C36] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-[#193C36]focus:ring-offset-2"
            >
                Update
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                        onSubmit={(e) => {
                            handleClose();
                            e.preventDefault();
                            props.updatePerson(props.id, name, role);
                        }}
                        id="editmodal"
                        className="w-full max-w-sm"
                    >
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="name"
                                >
                                    Name
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#193C36]"
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="role"
                                >
                                    Branch and Year
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#193C36]"
                                    id="role"
                                    type="text"
                                    value={role}
                                    onChange={(e) => {
                                        setRole(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="email"
                                >
                                    Email
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#193C36]"
                                    id="email"
                                    type="text"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
                        onClick={handleClose}
                    >
                        Close
                    </button>
                    <button
                        className="bg-[#193C36] hover:bg-[#193C36] text-white font-bold py-2 px-4 rounded"
                        form="editmodal"
                    >
                        Update
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditPerson;
