import Tree from "react-d3-tree";
import { useCenteredTree } from "./helpers";
import chakingalTree from "../../data/chakingal.json";

interface treeProps {
  name: string;
  attributes?: any;
  children?: treeProps[];
}

const treeData: treeProps = chakingalTree;

const renderRectSvgNode = ({ nodeDatum, toggleNode }: any) => (
  <g onClick={toggleNode}>
    <foreignObject width={130} height={120} x={-65}>
      <div className="p-1 text-center bg-white border rounded-lg shadow line-clamp-1">
        {nodeDatum.name}
      </div>
      {nodeDatum?.attributes?.partner && (
        <div className="bg-white border rounded-lg shadow">
          <h3 className="text-center">{nodeDatum.attributes.partner}</h3>
        </div>
      )}
    </foreignObject>
  </g>
);

const D3Tree = () => {
  const [translate, containerRef]: any = useCenteredTree();
  return (
    <div className="w-full h-full bg-gray-100" ref={containerRef}>
      <Tree
        data={treeData}
        translate={translate}
        orientation="vertical"
        renderCustomNodeElement={renderRectSvgNode}
        pathFunc={"step"}
        initialDepth={1}
      />
    </div>
  );
};

export default D3Tree;
