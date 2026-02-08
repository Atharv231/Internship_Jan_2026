import useAuthStore from "../store/authStore";

function Dashboard() {
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  const handleLogout = async () => {
    try {
      await logout();
      // optional: navigate("/") if not using auth redirect
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <div>
      <h2>Welcome User ID: {user?.sub}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
