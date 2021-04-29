

const defaultFormatter = function(cell, params, rendered) {
	const div = document.createElement("div");
	div.className = "data";
	div.innerText = cell.getValue();
	return div;
}

const table = new Tabulator("#mainTable", {
 	data:tabledata,
 	layout:"fitColumns",
 	initialSort: [
 		{column: "full", dir: "asc"}
 	],
 	columns:[
	 	{title:"Plant", field:"full", formatter:defaultFormatter, headerFilter:"input", width:350},
	 	{title:"", field:"id",formatter:"image",formatterParams:{urlPrefix:"/static/pics/"}, width:250},
	 	//{title:"Type", field:"type", formatter:defaultFormatter},
	 	{title:"Family", field:"family", formatter:defaultFormatter},
	 	{title:"Temp", field:"season", hozAlign:"center", formatter:defaultFormatter},
	 	{title:"Height", field:"height", hozAlign:"center", formatter:defaultFormatter},
	 	{title:"Maturity", field:"maturity", hozAlign:"center", formatter:defaultFormatter},
	 	{title:"Spacing", field:"spacing", hozAlign:"center", formatter:defaultFormatter},
	 	{title:"Depth", field:"depth", hozAlign:"center", formatter:defaultFormatter},
 	]
});