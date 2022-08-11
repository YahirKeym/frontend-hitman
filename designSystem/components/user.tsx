import useUserComponent from "../../hooks/userComponent.hook";

const UserComponent = ({
  name,
  email,
  role,
  active,
  assign_name,
  assign,
  users,
  userRole,
  id,
}: any) => {
  const {
    setUpdateUser,
    updateUser,
    sendUpdateUser,
    setAssignedId,
    setActive,
    status,
    manager,
  } = useUserComponent(assign, active, id);
  return (
    <div
      className="row col-12"
      style={{ border: "1px solid #000", padding: "10px" }}
    >
      <div className="row col-12" style={{ borderBottom: "1px solid #000" }}>
        <div className="col-2">Name</div>
        <div className="col-2">Email</div>
        <div className="col-2">Role</div>
        <div className="col-2">Active</div>
        <div className="col-2">Assigned</div>
        {userRole === 1 && <div className="col-2">Actions</div>}
      </div>
      <div className="row col-12">
        <div className="col-2">{name}</div>
        <div className="col-2">{email}</div>
        <div className="col-2">{role}</div>
        {updateUser && (
          <div className="col-2">
            <select
              className="form-control"
              onChange={({ target }) => setActive(+target.value)}
              defaultValue={status}
            >
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
          </div>
        )}
        {!updateUser && (
          <div className="col-2">{active ? "Active" : "Inactive"}</div>
        )}

        {updateUser && (
          <div className="col-2">
            <select
              className="form-control"
              onChange={({ target }) => setAssignedId(+target.value)}
              defaultValue={manager}
            >
              {users.map((user: any) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
        )}
        {!updateUser && <div className="col-2">{assign_name}</div>}
        {userRole === 1 && (
          <div className="col-2">
            <button
              className="btn btn-success"
              onClick={(e) => {
                e.preventDefault();
                setUpdateUser(!updateUser);
                if (updateUser) sendUpdateUser();
              }}
            >
              update
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserComponent;
