#!/usr/bin/python3
import requests

r = requests.get('https://www.hackercoop.dev/api/boop', auth=('user','HackerSummer2023'))

print(r)