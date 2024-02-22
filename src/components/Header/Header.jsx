const Header = (props) => {
  return (
    <div className="w-full h-24 flex justify-between align-center px-8 font-bold rounded-lg">
      {props.children}
    </div>
  );
};

export default Header;
