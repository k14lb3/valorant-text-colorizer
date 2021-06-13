const Layout = ({ children }) => {
  return (
    <div className="h-screen">
      <header className="py-4 px-8 bg-black border-b border-red">
        <h1 className="text-red">Valorant Text Colorizer</h1>
      </header>
      <main className="h-full bg-pampas">{children}</main>
    </div>
  );
};

export default Layout;
