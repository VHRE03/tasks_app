export function TaskCard({ task }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{task.tittle}</h5>
        <p className="card-text">{task.description}</p>
      </div>
    </div>
  );
}
