import { useRouter } from 'next/router';

const RoutineCard = ({ id, icon, title, description, backgroundColor = 'bg-yellow-100' }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/routines/${id}`);
  };

  return (
    <div
      className="routine-card bg-white border border-gray-100 p-5 mb-4 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center">
        <div className={`rounded-full ${backgroundColor} p-3 mr-4`}>
          <span className="text-xl">{icon}</span>
        </div>
        <div>
          <h3 className="font-medium text-black">{title}</h3>
          <p className="text-sm text-black opacity-70">{description}</p>
        </div>
        <div className="ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-black opacity-60"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RoutineCard;
