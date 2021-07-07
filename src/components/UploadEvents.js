
function UploadEvents() {

    return (
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupFileAddon01">
                    Upload
          </span>
            </div>
            <div className="custom-file">
                <input
                    type="file"
                    className="file"
                    id="inputGroupFile01"
                    onChange={event => {
                        console.log(event.target.files);
                        const e=event.target.files;

                        const reader = new FileReader();

                        reader.onload = e => {
                            const jsonFileContent = e.target.result;
                            console.log(jsonFileContent);
                            const JsonObj = JSON.parse(jsonFileContent);
                            // dispatch(SaveJsonData(JsonObj.Events.Event));
                        };
                        reader.readAsText(event);
                    }}
                />
            </div>
        </div>
    );
}
export default UploadEvents;