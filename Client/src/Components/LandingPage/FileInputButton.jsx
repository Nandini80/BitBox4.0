import React, { useState } from 'react';
import styled from 'styled-components';

const InputFileContainer = styled.div`
  position: relative;
  width: 225px;
`;

const InputFileTrigger = styled.label`
  display: block;
  padding: 14px 45px;
  background: #39D2B4;
  color: #fff;
  font-size: 1em;
  transition: all .4s;
  cursor: pointer;

  &:hover, &:focus {
    background: #34495E;
    color: #39D2B4;
  }
`;

const InputFile = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 225px;
  opacity: 0;
  padding: 14px 0;
  cursor: pointer;
`;

const FileReturn = styled.p`
  margin: 0;

  &:not(:empty) {
    margin: 1em 0;
  }

  &:before {
    content: "Selected file: ";
    font-style: normal;
    font-weight: normal;
  }
`;

const FileInputButton = () => {
  const [selectedFile, setSelectedFile] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]?.name || '');
  };

  return (
    <form action="#">
      <InputFileContainer className="input-file-container">
        <InputFile
          id="my-file"
          type="file"
          onChange={handleFileChange}
        />
        <InputFileTrigger
          htmlFor="my-file"
          className="input-file-trigger"
          tabIndex="0"
        >
          Select a file...
        </InputFileTrigger>
      </InputFileContainer>
      <FileReturn className="file-return">{selectedFile}</FileReturn>
    </form>
  );
};

export default FileInputButton;
