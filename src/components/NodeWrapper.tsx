const NodeWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`rounded-lg border border-gray-300 bg-white p-4 shadow-md ${className}`}
    >
      {children}
    </div>
  );
};

export default NodeWrapper;
