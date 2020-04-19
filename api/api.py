import requests
import requests_cache

from flask import Flask, request, jsonify

app = Flask(__name__)

# Cache results from external API for 1 hour
requests_cache.install_cache(cache_name='aiven_cache', backend='sqlite', expire_after=3600)

# Get clouds from external API
@app.route('/api/clouds')
def get_clouds():
  url = 'https://api.aiven.io/v1/clouds'
  response_dict = requests.get(url).json()

  # Format properties for ease of use
  if 'clouds' in response_dict:
    for cloud in response_dict['clouds']:
      cloud['cloud_provider'] = cloud['cloud_name'].split('-', 1)[0]
      cloud['latitude'] = cloud.pop('geo_latitude')
      cloud['longitude'] = cloud.pop('geo_longitude')
    
  return jsonify(response_dict)
