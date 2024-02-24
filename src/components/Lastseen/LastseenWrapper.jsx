import LastSeenCard from "./LastseenCard/LastseenCard";

const LastSeenWrapper = (props) => {
  return (
    <div className="w-full h-72 px-8">
      <h4 className="text-xl font-medium mb-7">Last Seen</h4>

      <div className="w-inherit h-4/5 flex items-center justify-start space-x-8">
        <LastSeenCard></LastSeenCard>
        <LastSeenCard></LastSeenCard>
        <LastSeenCard></LastSeenCard>
      </div>
    </div>
  );
};

export default LastSeenWrapper;
