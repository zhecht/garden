import json



if __name__ == '__main__':
	with open("seeds.json") as fh:
		seeds = json.loads(fh.read())

	print("# garden\n")
	for flower_type in ["fruit", "veg", "herb", "lettuce", "flower"]:
		print(f"\n## {flower_type.title()}")
		print("Plant |  | Season | Maturity | Plant | Height")
		print("----- | --- | ------ | -------- | ----- | -----")
		for seed in seeds:
			if seeds[seed]["type"] != flower_type:
				continue
			img = f"![pic](/pics/{seed})"
			print("{} | {} | {} | {} | {} | {}".format(seeds[seed].get("full"), img, seeds[seed].get("season"), seeds[seed].get("maturity"), seeds[seed].get("plant"), seeds[seed].get("height")))
