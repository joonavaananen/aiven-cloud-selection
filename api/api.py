import requests
import requests_cache

from flask import Flask, request, jsonify

app = Flask(__name__)

requests_cache.install_cache(cache_name='aiven_cache', backend='sqlite', expire_after=3600)

@app.route('/clouds')
def get_clouds():
  url = 'https://api.aiven.io/v1/clouds'
  response_dict = requests.get(url).json()
  return jsonify(response_dict)
