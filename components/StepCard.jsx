import Tag from './Tag';

const StepCard = ({ stepNumber, title, products = [] }) => {
  return (
    <div className="routine-card bg-white border border-gray-100 p-5 mb-4">
      <div className="flex items-start">
        <div className="rounded-full bg-blue-50 p-2 mr-3 mt-1">
          <span className="text-sm font-medium text-black">{stepNumber}</span>
        </div>
        <div>
          <h4 className="font-medium text-black mb-2">{title}</h4>
          <div className="flex flex-wrap gap-2">
            {products.map((product, index) => (
              <Tag key={index} text={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
