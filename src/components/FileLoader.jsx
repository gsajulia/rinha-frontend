const FileLoader = ({ setData }) => {
    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            const fileName = file.name;
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const jsonResponse = JSON.parse(e.target?.result);
                    setData({ fileName, jsonResponse });
                } catch (error) {
                    console.error("Erro ao analisar JSON:", error);
                }
            };
            reader.readAsText(file);
        }
    };

    return (
        <div>
            <label className="input-button" htmlFor="input-json">
                <span>Load JSON</span>
            </label>
            <input
                type="file"
                name="input-json"
                id="input-json"
                className="file-loader"
                accept=".json"
                onChange={handleFileChange}
            />
        </div>
    );
};

export default FileLoader;
