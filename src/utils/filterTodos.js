const filterTodos = ({ todos, status }) => {
    switch (status) {
        case "all":
            return todos.sort(function (todo1, todo2) {
                const statusOrder = { Active: 1, Completed: 2, Pending: 3, Archive: 4 };
                const status1 = statusOrder[todo1.status] || 10;
                const status2 = statusOrder[todo2.status] || 10;
                return status1 - status2;
            });
        default:
            return todos.filter((todo) => todo.status.toLowerCase() === status.toLowerCase());
    }
};

export default filterTodos;
