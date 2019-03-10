from api import app


@app.route('/', methods=['GET'])
def send_mail():
    return "Hello world"
