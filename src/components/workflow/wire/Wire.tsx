import { BaseEdge, EdgeProps, getBezierPath } from "@xyflow/react";

const Wire = ({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  markerEnd,
}: EdgeProps) => {
  const [d] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });
  return (
    <BaseEdge
      markerEnd={markerEnd}
      style={{ stroke: "black" }}
      path={d}
    />
  );
};

export default Wire;
