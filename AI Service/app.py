from flask import Flask, request

import pytesseract
from PIL import Image

app = Flask(__name__)

@app.route('/extract_text', methods=['POST'])
def extract_text(image_file):
    # Check if the request contains an image file
    # if 'image' not in request.files:
    #     return 'No image file provided', 400

    # image_file = request.files['image']

    # Check if the file is empty
 
    print(type(image_file))
    
   

    # Use pytesseract to extract text from the image
    text = pytesseract.image_to_string(image_file)

    # Return the extracted text as the response
    return text

if __name__ == '__main__':
    app.run(debug=True)
