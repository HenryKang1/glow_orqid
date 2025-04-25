const Tag = ({ text, onClick }) => {
  if (onClick) {
    return (
      <button 
        className="px-3 py-1 bg-gray-100 rounded-full text-xs text-black transition hover:bg-gray-200"
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
  
  return (
    <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-black">
      {text}
    </span>
  );
};

export default Tag;
