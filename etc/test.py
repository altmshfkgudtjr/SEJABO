import requests
import json
from pprint import pprint
#shin10256
token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTkzMjMzMDAsIm5iZiI6MTU1OTMyMzMwMCwianRpIjoiZTgxNjRkNjgtOTE1Zi00OWRjLWEyNmItOGFmNzljZWNiZWMzIiwiaWRlbnRpdHkiOiIxNjAxMTA5MiIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.MRZIIYfhWIqV8GkCPwlndk5SjEDSGQdLTxfkZUD2IDw"

header = {
	'Authorization':"Bearer " + token
}
#Debug Here
url = "http://localhost/like/1/1"
data = {
#POST
"id":"16011089",
"pw":"!hkw10256",
"title":"qsc",
"content":"asdcasdwe",
"url":"asd"
}
######
#GET 방식
html = requests.get(url, headers =header, data = data).content
#POST 방식
#html = requests.post(url, headers =header, data = data).content
html = json.loads(html)
pprint(html)