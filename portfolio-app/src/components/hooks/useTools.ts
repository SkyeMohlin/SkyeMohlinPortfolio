export interface ToolData{
    url: string,
    name: string,
}
  
const toolIconImage: {[key: string]: ToolData} = {
    unreal: {url: "devicon-unrealengine-original", name: "Unreal Engine"},
    cpp: {url: "devicon-cplusplus-plain", name: "C++"},
    blender: {url: "devicon-blender-original", name: "Blender"},
};

export const getToolIconData = (tool: string) => {
    const toolData = toolIconImage[tool];

    if(toolData) return toolData;
    
    return {url: "", name: tool};
};