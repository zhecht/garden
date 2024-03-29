from flask import *
import json
import os

main = Blueprint('main', __name__, template_folder='views')

base_path = ""
# check if we're in PROD
if os.path.exists("/home/zhecht/garden"):
	base_path = "/home/zhecht/garden/"


#@main.route('/',methods=["POST"])
#def post_route():
	

@main.route('/',methods=["GET"])
def main_route():
	with open("static/seeds.json") as fh:
		seeds = json.load(fh)
	data = []
	for seed in seeds:
		data.append({
			"id": seed,
			"full": seeds[seed]["full"],
			"type": seeds[seed].get("type", ""),
			"family": seeds[seed].get("family", ""),
			"season": seeds[seed].get("season", ""),
			"maturity": seeds[seed].get("maturity", 0),
			"height": seeds[seed].get("height", ""),
			"depth": seeds[seed].get("depth"),
			"spacing": seeds[seed].get("spacing", ""),
			"description": seeds[seed].get("description", ""),
			"SHU": seeds[seed].get("SHU", 0),
			"total": seeds[seed].get("total", 0)
		})
	return render_template("main.html", data=data)