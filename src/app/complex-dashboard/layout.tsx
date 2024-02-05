export default function DashboardLayout({
  children,
  users,
  revenue,
  notification,
  login,
}: {
  children: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
  notification: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLogin = false;
  return isLogin ? (
    <>
      <div>{children}</div>
      <div style={{ display: "flex " }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notification}</div>
      </div>
    </>
  ) : (
    login
  );
}
