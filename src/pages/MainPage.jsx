import MemeCard from "../features/memes/MemeCard";

function MainPage() {
  return (
    <div className="py-8 px-6 flex flex-col gap-12 ">
      <MemeCard />
      <MemeCard />
      <MemeCard />
    </div>
  );
}

export default MainPage;
