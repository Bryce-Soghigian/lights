from flask import Flask,make_response
app = Flask(__name__)

@app.route("/")
def hello():
  return "Hello World!"

@app.route("/up")
def is_up():
  print('this triggers functionality')
  return "server is up"

@app.route("/api/v1/lights/couch/<color>", methods=["GET"])
def couch_light_controller(color):
  print(f"Hit couch endpoint {color}")
  
  return "<h1>COUCH ROUTE</h1>"

@app.route("/api/v2/test_response/<color>")
def users(color):
    print(f"color:{color}")
    # headers = {"Content-Type": "application/json"}
    return make_response(
        'Test worked!',
        200
    )

if __name__ == "__main__":
  app.run()