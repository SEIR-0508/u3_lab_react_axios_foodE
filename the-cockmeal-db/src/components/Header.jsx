import Nav from "./Nav";

const Header = () => {
  return (
    <header className="header text-center mt-7">
      <h1 className="text-5xl font-semibold font-mono tracking-widest mx-auto">
        The CockMeal DB
      </h1>
      <Nav />
    </header>
  );
};

export default Header;
