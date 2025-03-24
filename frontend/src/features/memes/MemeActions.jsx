import MemeShare from "./MemeShare";
import MemeVotes from "./MemeVotes";

function MemeActions() {
  return (
    <div className="flex justify-between items-center sm:mt-2 mt-1">
      <MemeVotes />
      <MemeShare />
    </div>
  );
}

export default MemeActions;
