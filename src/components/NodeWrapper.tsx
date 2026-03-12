const NodeWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`rounded-lg font-manrope font-normal px-3 p-2 shadow-md ${className}`}
    >
      {children}
    </div>
  );
};

export default NodeWrapper;
