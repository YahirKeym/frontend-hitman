import { NextApiRequest, NextApiResponse } from "next";
import UserComponent from "../../designSystem/components/user";
import { Layout } from "../../designSystem/layout";
import validateSession from "../../helpers/validateSession";
import useUsers from "../../hooks/users.hook";

const UsersPage = ({ userData }: any) => {
  const { users } = useUsers(userData.role, userData.id);
  return (
    <Layout>
      {users.map((user: any, id) => (
        <UserComponent
          key={id}
          userRole={userData.role}
          {...user}
          users={users}
        />
      ))}
    </Layout>
  );
};

export default UsersPage;

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
      userData: data,
    },
  };
};
