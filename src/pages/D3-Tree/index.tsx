import Tree, { CustomNodeElementProps } from "react-d3-tree";
import { useCenteredTree } from "./helpers";
import chakingalTree from "../../data/chakingal.json";
// import ChevronUpIcon from "../../assets/Chevron";

interface treeProps {
  name: string;
  attributes?: any;
  children?: treeProps[];
}

const treeData: treeProps = chakingalTree;

const renderRectSvgNode = ({
  nodeDatum,
  toggleNode,
}: CustomNodeElementProps) => {
  const isCollapsed = nodeDatum.__rd3t.collapsed;
  return (
    <g className="" onClick={toggleNode}>
      <foreignObject width={130} height={100} x={-65}>
        <div className="flex justify-between items-center px-3 font-semibold gap-2 p-1.5 bg-secondary hover:bg-raw-secondary text-primary border border-secondary-3 rounded-lg shadow line-clamp-1">
          {nodeDatum.name}

          {/* <ChevronUpIcon rotate={isCollapsed ? 180 : 0} /> */}
          {!!nodeDatum?.attributes?.partner && (
            <div>{isCollapsed ? "🔽" : "🔼"}</div>
          )}
        </div>
        {!isCollapsed && nodeDatum?.attributes?.partner && (
          <div className="p-1 px-3 font-semibold bg-secondary text-primary border border-secondary-3 rounded-lg shadow">
            <h3 className="text-left">{nodeDatum.attributes.partner}</h3>
          </div>
        )}
      </foreignObject>
    </g>
  );
};

const D3Tree = () => {
  const [translate, containerRef]: any = useCenteredTree();
  return (
    <div className="w-full h-full bg-secondary-2" ref={containerRef}>
      <Tree
        data={treeData}
        translate={translate}
        orientation="vertical"
        renderCustomNodeElement={renderRectSvgNode}
        pathFunc={"step"}
        initialDepth={1}
        nodeSize={{ x: 140, y: 200 }}
      />
    </div>
  );
};

export default D3Tree;
