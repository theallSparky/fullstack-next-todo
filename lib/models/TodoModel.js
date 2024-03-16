const Schema = new mongoose.Schema(
  {
    title: {
      type: string,
      required: true,
    },
    description: {
      type: string,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);

const TodoModel = mongoose.models.todo || mongoose.model("todo", Schema);
