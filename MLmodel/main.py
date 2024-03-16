from tensorflow import keras


# from typing import Annotated
# from fastapi import FastAPI, Form, Request
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel
# from fastapi.responses import JSONResponse
# import json
from tensorflow import keras
import tensorflow as tf
import numpy as np
import os
import tensorflow_hub as hub
from fastapi import FastAPI, UploadFile, File
# Load your TensorFlow model

IMG_SIZE = 224
MODEL_URL = "test.keras"

def final_model(model_path):
  """
  Loads a saved model from a specified path.
  """
  print(f"Loading saved model from: {model_path}")
  model = keras.models.load_model(model_path)
  return model

hub_model = final_model(MODEL_URL)

print(hub_model.summary())

app = FastAPI()

# Define your image processing function
def process_image(image_data):
    """
    Takes an image file data and turns it into a tensor
    """

    # Turn the image data into numerical tensors with 3 color channels (Red, Green, Blue)
    image = tf.image.decode_jpeg(image_data, channels=3)

    # Normalization
    # Convert the color channel values from 0-255 to 0-1 values
    image = tf.image.convert_image_dtype(image, tf.float32)

    # Resize the image to your desired size
    image = tf.image.resize(image, size=[IMG_SIZE, IMG_SIZE])

    return image

# Define your logic for extracting the predicted label
def get_pred_label(prediction_probabilities):
    """
    Turns an array of prediction probabilities into a label.
    """
    unique_labels = ['fake', 'real']  # Define your unique labels
    return unique_labels[tf.argmin(prediction_probabilities)]


# Define your FastAPI endpoint
@app.post("/predict/")
async def predict_image(file: UploadFile = File(...)):
    """
    Endpoint to accept image file and make predictions.
    """
    # Read the uploaded image file
    contents = await file.read()
    # Process the image
    processed_image = process_image(contents)

    # # Batchify the processed image
    data_batch = tf.data.Dataset.from_tensors(processed_image).batch(1)

    # Perform prediction
    prediction_probabilities = hub_model.predict(data_batch)  # Pass the batched image to your model for prediction
    print(prediction_probabilities)

    # # Extract the predicted label
    # predicted_label = get_pred_label(prediction_probabilities)

    # Return the predicted label in JSON format
    # return {"predicted_label": predicted_label}
    return {"predicted_label": "real"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
