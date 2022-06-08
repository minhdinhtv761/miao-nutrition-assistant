from dotenv import load_dotenv
import os
from src.app import create_app

load_dotenv()

HOST = os.environ.get("HOST")
PORT = os.environ.get("PORT")

app = create_app()

if __name__ == "__main__":
    app.run(host=HOST, port=PORT, debug=True)