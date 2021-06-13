const Layout = ({ children }) => {
  return (
    <div className="h-screen">
      <header className="py-4 px-8 bg-black border-b-2 border-red">
        <h1 className="text-red">Valorant Text Colorizer</h1>
      </header>
      <main className="h-full bg-pampas pt-5">{children}</main>
    </div>
  );
};

export default Layout;
