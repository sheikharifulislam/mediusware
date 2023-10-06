import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import Modal from "react-modal";
import { AppContext } from "../../Context/AppContext";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

const BaseModal = ({ title, children }) => {
    const [modalIsOpen, setIsOpen] = React.useState(true);
    const { setEven } = useContext(AppContext);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal">
            <div>
                <div>
                    <h1 style={{ textAlign: "center", margin: "20px 0" }}>{title}</h1>
                    <NavLink to="/modal-a">
                        <button
                            type="button"
                            className="btn btn-lg"
                            style={{
                                color: "#46139f",
                            }}
                        >
                            All Contacts
                        </button>
                    </NavLink>
                    <NavLink to="/modal-b">
                        <button
                            type="button"
                            className="btn btn-lg "
                            style={{
                                color: "#ff7f50",
                            }}
                        >
                            Us Contacts
                        </button>
                    </NavLink>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "10px",
                    }}
                >
                    <button
                        type="button"
                        style={{
                            border: "1px solid #46139f",
                            background: "transparent",
                            padding: "5px 25px",
                            borderRadius: "5px",
                        }}
                        onClick={closeModal}
                    >
                        Close
                    </button>
                </div>
            </div>
            <div>{children}</div>
            <div>
                <input type="checkbox" onChange={(e) => setEven(e.target.checked)} />
                <span>Only Even</span>
            </div>
        </Modal>
    );
};

export default BaseModal;
