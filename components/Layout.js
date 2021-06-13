const Layout = ({ children }) => {
  return (
    <div className="h-screen bg-pampas">
      <header className="py-4 px-8 bg-black border-b-2 border-red">
        <h1 className="text-red">Valorant Text Colorizer</h1>
      </header>
      <main className="pt-5">{children}</main>
    </div>
  );
};

export default Layout;
