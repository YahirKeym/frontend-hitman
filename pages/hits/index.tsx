import { NextApiRequest, NextApiResponse } from "next";
import HitComponent from "../../designSystem/components/hit";
import { Layout } from "../../designSystem/layout";
import validateSession from "../../helpers/validateSession";
import useHit from "../../hooks/hits.hook";

const HitsPage = ({ user }: any) => {
  const {
    hits,
    hitmans,
    activeCreateHit,
    setActiveCreateHit,
    setDescription,
    setNameTarget,
    setUserAssigned,
    sendCreateHit,
  } = useHit(user.role, user.id);
  return (
    <Layout>
      <div className="row">
        <div className="col-12 row">
          <div className="row col-12">
            {user.role < 3 && (
              <button
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveCreateHit(!activeCreateHit);
                }}
              >
                Crear hit
              </button>
            )}
          </div>
          {activeCreateHit && user.role < 3 && (
            <div className="col-12">
              <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                  <div className="card-body p-4 p-sm-5">
                    <form>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                          onChange={({ target }) =>
                            setDescription(target.value)
                          }
                        />
                        <label htmlFor="floatingInput">Description Hit</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                          onChange={({ target }) => setNameTarget(target.value)}
                        />
                        <label htmlFor="floatingPassword">Name Target</label>
                      </div>
                      <div className="form-floating mb-3">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          onChange={({ target }) =>
                            setUserAssigned(target.value)
                          }
                        >
                          <option selected disabled>
                            Select Hitman
                          </option>
                          {hitmans.map((hitman: any, id) => (
                            <option key={id} value={hitman.id}>
                              {hitman.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="d-grid">
                        <button
                          className="btn btn-primary btn-login text-uppercase fw-bold"
                          type="submit"
                          onClick={(e) => {
                            e.preventDefault();
                            sendCreateHit();
                          }}
                        >
                          create hit
                        </button>
                      </div>
                      <hr className="my-4" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="col-12 row">
          {hits.map((hit: any, id: number) => (
            <HitComponent key={id} {...hit} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HitsPage;

export const getServerSideProps = async ({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) => {
  const [userIsLoggued, data] = await validateSession(req, res);
  if (!userIsLoggued) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      user: data,
    },
  };
};
