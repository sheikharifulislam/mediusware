import React, { useState } from "react";

const initialState = {
    name: "",
    status: "",
};

const Problem1 = () => {
    const [show, setShow] = useState("all");
    const [todos, setTodos] = useState([]);
    const [data, setData] = useState(initialState);

    const handleClick = (val) => {
        setShow(val);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos((prv) => [...prv, { ...data }]);
        setData(initialState);
    };

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setData((prv) => ({
            ...prv,
            [key]: value,
        }));
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4" onSubmit={handleSubmit}>
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Status"
                                name="status"
                                value={data.status}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-auto">
                            <input
                                type="submit"
                                value="Submit"
                                className="btn btn-primary"
                                disabled={!data.name || !data.status}
                            />
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button
                                className={`nav-link ${show === "all" && "active"}`}
                                type="button"
                                onClick={() => handleClick("all")}
                            >
                                All
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${show === "active" && "active"}`}
                                type="button"
                                onClick={() => handleClick("active")}
                            >
                                Active
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${show === "completed" && "active"}`}
                                type="button"
                                onClick={() => handleClick("completed")}
                            >
                                Completed
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.map((todo) => (
                                <tr>
                                    <th scope="row">{todo.name}</th>
                                    <td>{todo.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;
