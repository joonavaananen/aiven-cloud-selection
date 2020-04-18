import requests
import requests_cache

from flask import Flask, request, jsonify

app = Flask(__name__)

requests_cache.install_cache(cache_name='aiven_cache', backend='sqlite', expire_after=3600)

@app.route('/api/clouds')
def get_clouds():
  url = 'https://api.aiven.io/v1/clouds'
  response_dict = requests.get(url).json()

  if 'clouds' in response_dict:
    for cloud in response_dict['clouds']:
      cloud['cloud_provider'] = cloud['cloud_name'].split('-', 1)[0]
    
  return jsonify(response_dict)
