function ViewerTree({ fileName, jsonResponse }) {
    return (
        <div>
            <h2>{fileName}</h2>
            <pre>{JSON.stringify(jsonResponse, null, 2)}</pre>
        </div>
    );
}

export default ViewerTree;
