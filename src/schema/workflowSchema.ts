import StartNode from "@/components/workflow/nodes/StartNode";
import TaskNode from "@/components/workflow/nodes/TaskNode";
import Wire from "@/components/workflow/wire/Wire";
import { NodeTypes } from "@xyflow/react";

export const nodeTypes: NodeTypes = {
  startNode: StartNode,
  taskNode: TaskNode,
};

export const edgeTypes = {
  wire: Wire,
};
