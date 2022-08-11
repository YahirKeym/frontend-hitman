const Logout = () => {
  document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  location.href = "/";
  return <div></div>;
};

export default Logout;
