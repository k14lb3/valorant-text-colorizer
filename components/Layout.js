const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-pampas">
      <header className="py-4 px-8 bg-black border-b-2 border-red">
        <h1 className="text-red">Valorant Text Colorizer</h1>
      </header>
      <main className="flex justify-center flex-grow pt-5 pb-20">
        {children}
      </main>
      <footer className="bg-black h-full border-t-2 border-red text-center text-gray text-2xl">
        <div className="my-10 font-openSans">Made by k14lb3</div>
      </footer>
    </div>
  );
};

export default Layout;
