import { useState } from "react";
import FileLoader from "./components/FileLoader";
import "./styles.css";
import ViewerTree from "./components/ViewerTree";
import { TJsonData } from "./models/structures";

function Home() {
  const [data, setData] = useState<TJsonData | null>(null);

  return (
    <main className="home-container">
      {!data && (
        <>
          <h1>JSON Tree Viewer</h1>
          <p className="app-subtitle">
            Simple JSON Viewer that runs completely on-client. No data exchange
          </p>
          <FileLoader setData={setData} />
        </>
      )}
      {data && <ViewerTree {...data} />}
    </main>
  );
}

export default Home;
