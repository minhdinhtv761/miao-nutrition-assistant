from src.app import create_app

app = create_app()

if __name__ == "__main__":
    app.run(host="10.0.163.52",port=5000,debug=True)