from flask import Flask, jsonify
from flask_cors import CORS
from questions_and_solutions import question12

app = Flask(__name__)
CORS(app)

code_snippets = {
    1: """class MyClass:
    def __init__(self, name):
        self.name = name

    def greet(self):
        return f"Hello, {self.name}!"

obj = MyClass("Alice")
print(obj.greet())""",
    2: """def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))"""
}

@app.route('/code/<int:number>', methods=['GET'])
def get_code(number):
    code = code_snippets.get(number, "Solution not found.")  
    return jsonify({"code": code})


@app.route('/problem/<int:number>', methods=['GET'])
def get_problem(number):
    code = code_snippets.get(number, "Problem not found.")
    return jsonify({"code": code})

if __name__ == '__main__':
    app.run(port=5000, debug=True) 