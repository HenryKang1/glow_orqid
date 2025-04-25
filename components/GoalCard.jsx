const GoalCard = ({ icon, text }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-3">
        <div className="rounded-full bg-yellow-100 p-2 mr-3">
          <span className="text-lg">{icon}</span>
        </div>
        <h2 className="text-lg font-semibold text-black">Goal</h2>
      </div>
      <p className="text-black ml-11">{text}</p>
    </div>
  );
};

export default GoalCard;
