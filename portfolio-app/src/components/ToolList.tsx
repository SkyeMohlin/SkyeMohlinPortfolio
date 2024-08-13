import "./ToolList.css";
import ToolIcon from "./ToolIcon";
import { getToolIconData, ToolData } from "./hooks/useTools";

interface ToolListProps {
  tools: string[];
}

const ToolList = ({ tools }: ToolListProps) => {
  return (
    <div className="toollist">
      {tools.map((tool) => {
        const toolData: ToolData = getToolIconData(tool);

        if (!toolData) return null;
        return <ToolIcon iconUrl={toolData.url} toolName={toolData.name} />;
      })}
    </div>
  );
};

export default ToolList;
