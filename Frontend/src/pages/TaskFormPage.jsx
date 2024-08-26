import { useForm } from "react-hook-form";
import { createTask } from "../api/tasks.api";
import { useNavigate } from "react-router-dom";

export function TaskFormPage(params) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    await createTask(data);
    navigate("/tasks");
  });

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Tittle"
        {...register("tittle", { required: true })}
      />
      {errors.tittle && <span>This field is requiered</span>}

      <textarea
        placeholder="Description"
        {...register("description", { required: true })}
      ></textarea>
      {errors.description && <span>This field is requiered</span>}

      <button>Save</button>
    </form>
  );
}
