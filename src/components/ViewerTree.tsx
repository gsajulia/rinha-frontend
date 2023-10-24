import { TViewerTree } from "../models/components";

function ViewerTree({ fileName, jsonResponse }: TViewerTree) {
  return (
    <div>
      <h2>{fileName}</h2>
      <pre>{JSON.stringify(jsonResponse, null, 2)}</pre>
    </div>
  );
}

export default ViewerTree;
