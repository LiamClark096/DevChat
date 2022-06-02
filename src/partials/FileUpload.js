import React, { useEffect, useState } from "react";
import mime from "mime-types";

export default function FileUpload({ uploadFile }) {
  const acceptableFileTypes = ["image/jpeg", "image/png", "image/gif"];
  const [state, setState] = useState({ file: null });

  const addFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      setState({ file });
    }
  };
  useEffect(() => {
    const { file } = state;

    if (file !== null) {
      if (isAuthorized(file.name)) {
        const metadata = { contentType: mime.lookup(file.name) };
        console.log('metadata :', metadata);
        uploadFile(file, metadata);
        clearFile();
      }
    }
  }, [state]);

  const isAuthorized = (filename) =>
    acceptableFileTypes.includes(mime.lookup(filename));

  const clearFile = () => setState({ file: null });
  const onKeyPress = (e) => {
    if (e.key === "enter") {
      e.preventDefault();
    }
  };

  return (
    <input
      tabIndex={0}
      onKeyPress={onKeyPress}
      type="file"
      className="uploadBtn"
      onChange={addFile}
    />
  );
}
