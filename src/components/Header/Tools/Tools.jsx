const Tools = (props) => {
  return (
    <div className="w-3/5 h-inherit flex items-center justify-end px-14 space-x-8">
      {props.children}
    </div>
  );
};

export default Tools;
