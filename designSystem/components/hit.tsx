import useHitComponent from "../../hooks/hitcomponent.hook";

const HitComponent = ({
  assigned_name,
  created_name,
  description_hit,
  name_target,
  status,
  status_id,
  id,
}: any) => {
  const {
    setUpdateHit,
    setDescription,
    setTarget,
    setStatus,
    updateHit,
    description,
    target,
    statusData,
    sendUpdateHit,
    sendDeleteHit,
  } = useHitComponent(id, description_hit, name_target, status_id);
  return (
    <div className="row col-12">
      <div className="col-12 row">
        <div className="col-2">Hitman Name</div>
        <div className="col-2">Hit description</div>
        <div className="col-2">Target Name</div>
        <div className="col-2">Creator</div>
        <div className="col-2">status</div>
        <div className="col-2">actions</div>
      </div>
      <div className="col-12 row">
        <div className="col-2">{assigned_name}</div>
        {updateHit && (
          <div className="col-2">
            <input
              type="text"
              className="form-control col-2"
              defaultValue={description}
              onChange={({ target }) => setDescription(target.value)}
            />
          </div>
        )}
        {!updateHit && <div className="col-2">{description_hit}</div>}
        {updateHit && (
          <div className="col-2">
            <input
              type="text"
              className="form-control"
              defaultValue={target}
              onChange={({ target }) => setTarget(target.value)}
            />
          </div>
        )}
        {!updateHit && <div className="col-2">{name_target}</div>}
        <div className="col-2">{created_name}</div>
        {updateHit && (
          <div className="col-2">
            <select
              defaultValue={statusData}
              className="form-control"
              onChange={({ target }) => setStatus(+target.value)}
            >
              <option value="1">Active</option>
              <option value="2">Cancel</option>
              <option value="3">Complete</option>
            </select>
          </div>
        )}
        {!updateHit && <div className="col-2">{status}</div>}
        <div className="col-2">
          <button
            className="btn btn-success"
            onClick={(e) => {
              e.preventDefault();
              if (updateHit) sendUpdateHit();
              setUpdateHit(!updateHit);
            }}
          >
            update
          </button>
          <button
            className="btn btn-danger"
            onClick={(e) => {
              e.preventDefault();
              sendDeleteHit();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default HitComponent;
