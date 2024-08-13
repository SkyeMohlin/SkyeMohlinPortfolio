const ToolIcon = ({
  iconUrl,
  toolName,
}: {
  iconUrl: string;
  toolName: string;
}) => {
  return (
    <div className="tool">
      {iconUrl && <i className={"tool-icon" + " " + iconUrl} />}
      <p className="tool-title">{toolName}</p>
    </div>
  );
};

export default ToolIcon;
