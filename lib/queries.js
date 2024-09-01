//ALL REQUESTS TO THE DATABASE WILL GO HERE
const fetchTodos = async () => {
  const response = await axios("/api");
  setTodoData(response.data.todos);
};

const deleteTodo = async (id) => {
  const response = await axios.delete("/api", {
    params: {
      mongoId: id,
    },
  });
  toast.success(response.data.msg);
  fetchTodos();
};

const completeTodo = async (id) => {
  const response = await axios.put(
    "/api",
    {},
    {
      params: {
        mongoId: id,
      },
    }
  );
  toast.success(response.data.msg);
  fetchTodos();
};
