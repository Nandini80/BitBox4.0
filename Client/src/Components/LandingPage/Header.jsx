import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'; // Import Axios for sending HTTP requests

const BoxContainerWrapper = styled.div`
  border: 2px solid transparent;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f7f7f7;
  border-radius: 8px;
  overflow: hidden;
  font-family: 'Arial', sans-serif;
`;

const ImageContainer = styled.div`
  flex-basis: 50%;
  background: url('/DeepFake.png');
  background-repeat: no-repeat;
  background-position: center;
  width: 50px;
  height: 500px;
  margin-top: 5rem;
`;

const ContentContainer = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 100%;

  h2 {
    font-size: 32px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  input[type='file'] {
    margin-bottom: 20px;
  }

  .image-preview-container {
    width: 100%;
    position: relative;
    overflow: hidden;
    margin-bottom: 1px;
    flex-shrink: 0;
  }

  .image-preview {
    width: 15rem;
    height: auto;
    object-fit: contain; 
  }

  .check-button {
    margin-top: 0;
    margin-left:5rem; 
    align-self: flex-end;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease-in-out;
  }

  .check-button:hover {
    background-color: #0056b3;
  }
`;

const BoxContainer = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleNextClick = async () => {
    if (!selectedFile) {
      alert('Please upload an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post('http://localhost:4000/api/upload', formData);
      console.log('Image sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending image:', error);
      alert('Error sending image to the server.');
    }
  };

  return (
    <BoxContainerWrapper className="box-container">
      <ImageContainer />
      <ContentContainer className="content-container">
        <h2>DeepFake Detection System</h2>
        <p>
          A deepfake detection system is a technology designed to identify and mitigate the spread of deepfake content.
          Deepfakes are AI-generated media, such as images, videos, or audio clips, that are created using deep learning
          techniques. These techniques can manipulate existing content or create entirely synthetic media that appears
          highly realistic and often indistinguishable from genuine content.
        </p>
        <h3>Upload Image</h3>
        <input type="file" onChange={handleFileChange} />
        {selectedFile && (
          <div className="image-preview-container">
            <h3>Selected Image Preview:</h3>
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Selected"
              className="image-preview"
            />
            <button className="check-button" onClick={handleNextClick}>
              Detect it
            </button>
          </div>
        )}
      </ContentContainer>
    </BoxContainerWrapper>
  );
};

export default BoxContainer;
