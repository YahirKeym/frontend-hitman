import Link from "next/link";

export const Layout = ({ children }: any) => {
  return (
    <div className="row">
      <div className="col-12 bg-dark text-white p-3 row mb-3">
        <div className="col-1">
          <Link href="/hits">Hits</Link>
        </div>
        <div className="col-1">
          <Link href="/users">Users</Link>
        </div>
        <div className="col-1">
          <Link href="/cerrar-sesion">Logout</Link>
        </div>
      </div>
      {children}
    </div>
  );
};
