import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./FileUpload.css";

const FileUpload = (props) => {
  const [files, setFiles] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const fileList = Array.from(event.dataTransfer.files);
    setFiles([...files, ...fileList]);
  };

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png"];
    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setFiles(selectedFile);
    } else {
      // Handle invalid file type
      console.log("Invalid file type. Please select a valid image file.");
    }
  };

  const handleLocalFileUpload = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".jpg,.jpeg,.png";
    fileInput.addEventListener("change", (event) => {
      handleFileInputChange(event);
    });
    fileInput.click();
  };

  return (
    <Container fluid="lg" className="profile-upload p-0">
      <Row>
        <Col sm={6} className="document-preview">
          {files && (
            <div>
              <img src={URL.createObjectURL(files)} alt={files.name} />
            </div>
          )}
        </Col>
        <Col sm={6} className="d-flex flex-wrap gap-3">
          <Form
            className="position-relative"
            onDragOver={(event) => event.preventDefault()}
            onDrop={handleDrop}
          >
            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Control
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={handleFileInputChange}
              />
              <div className="drag-drop-text">
                <img
                  src="/assets/upload-icon.svg"
                  alt="upload img"
                  className="img-fluid mb-2"
                />
                <div className="d-flex align-items-center gap-1">
                  <span className="drag-drop-text-span fw-bold">
                    Drag and drop files or
                  </span>{" "}
                  <span
                    className="upload-link color-blue fw-bold"
                    onClick={handleLocalFileUpload}
                  >
                    browse
                  </span>
                </div>
                <p>Supported formats: JPEG, PNG</p>
              </div>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FileUpload;
