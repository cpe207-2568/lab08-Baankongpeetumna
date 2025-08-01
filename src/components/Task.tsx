import { type TaskCardProps } from "../libs/types";

export function Task(props: TaskCardProps) {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <h5 className="mb-1">{props.title}</h5>
          </div>
          <div className="col-lg-4">
            <small className="text-muted">{props.description}</small>
          </div>
          <div className="col-lg-2">
            <button className="btn btn-success me-2">Done</button>
          </div>
          <div className="col-lg-2">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
