

const defaultFormatter = function(cell, params, rendered) {
	const div = document.createElement("div");
	div.className = "data";
	div.innerText = cell.getValue();
	return div;
}

const plantingFormatter = function(cell, params, rendered) {
	const data = cell.getData();
	const div = document.createElement("div");
	div.className = "data";
	const spacing = document.createElement("div");
	spacing.innerText = "Spacing: "+data.spacing;
	const depth = document.createElement("div");
	depth.innerText = "Depth: "+data.depth;
	div.appendChild(spacing);
	div.appendChild(depth);
	return div;
}

const nameFormatter = function(cell, params, rendered) {
	const data = cell.getData();
	const div = document.createElement("div");
	div.className = "data";
	const name = document.createElement("div");
	name.innerText = cell.getValue();
	div.appendChild(name);
	if (data.SHU) {
		const shu = document.createElement("div");
		shu.innerText = "("+data.SHU + " SHU)";
		div.appendChild(shu);	
	}
	return div;
}

const imgFormatter = function(cell, params, rendered) {
	const data = cell.getData();
	const div = document.createElement("div");
	div.className = "data";
	div.style.height = "100px";
	const img = document.createElement("img");
	img.src = "/static/pics/"+cell.getValue()+".jpg";
	div.appendChild(img);
	return div;
}

const table = new Tabulator("#mainTable", {
 	data:tabledata,
 	layout:"fitColumns",
 	initialSort: [
 		{column: "full", dir: "asc"},
 		{column: "family", dir: "desc"},
 		{column: "SHU", dir: "desc"},
 	],
 	columns:[
	 	{title:"Name", field:"full", formatter:nameFormatter, headerFilter:"input", width:350},
	 	{title:"", field:"id",formatter: imgFormatter, width:250},
	 	//{title:"Type", field:"type", formatter:defaultFormatter},
	 	{title:"", field:"SHU", visible: false},
	 	{title:"Family", field:"family", formatter:defaultFormatter, headerFilter: "auto"},
	 	{title:"Temp", field:"season", hozAlign:"center", formatter:defaultFormatter},
	 	{title:"Height", field:"height", hozAlign:"center", formatter:defaultFormatter},
	 	{title:"Maturity", field:"maturity", hozAlign:"center", formatter:defaultFormatter},
	 	{title:"Planting", field:"spacing", hozAlign:"center", formatter:plantingFormatter},
 	]
});