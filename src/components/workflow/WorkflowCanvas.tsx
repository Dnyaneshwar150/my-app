import {
  Background,
  BackgroundVariant,
  ReactFlow,
  useNodesState,
  useEdgesState,
  ConnectionMode,
  Connection,
  MarkerType,
  Panel,
  Controls,
  Node,
  Edge,
  OnNodesChange,
  OnEdgesChange,
  applyEdgeChanges,
  applyNodeChanges,
} from "@xyflow/react";

import { edgeTypes, nodeTypes } from "@/schema/workflowSchema";

const WorkflowCanvas = () => {
  return (
    <div className='flex items-center justify-center'>
      <ReactFlow
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        proOptions={{ hideAttribution: true }}
      ></ReactFlow>
    </div>
  );
};

export default WorkflowCanvas;
