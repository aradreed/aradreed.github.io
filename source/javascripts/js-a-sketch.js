$(document).ready(function() {
	// Create a container to hold all div elements
	var containerDiv = $("<div></div>");
	containerDiv.attr("id", "container")
	$("article header").after(containerDiv);
	createDivs(4);
	
	// Add create new button
	var wrapper = $("<div class=wrapper></div")
	var button = $("<button>Create new</button>").attr("id", "clear");
	wrapper.append(button);
	
	containerDiv.append(wrapper);
	
	// Change the background of .divs when hovered over
	$(document).on("mouseenter", ".divs", function() {
		$(this).css("background-color", "black");
	});
	
	button.on("click", function() {
		var size = prompt("Enter a side length (between 1 and 60)");	
		
		// Continue prompting until given a size within range
		while (size < 1 || size > 60)
			size = prompt("Enter a side length (between 1 and 60)");
		
		$("table").remove();
		createDivs(size);
	});
	
});

function createDivs(size) {
	var totalSize = 600;
	var height = width = totalSize / size;
	
	// Table to separate divs
	var table = $("<table></table>");
	table.css("margin", "auto");
	$("#container").prepend(table);
	
	for (var i = 0; i < size; i++) {
		// Create rows
		var tr = $("<tr>/tr>");
		table.append(tr);
		
		for (var j = 0; j < size; j++) {
			// Create columns with divs
			var div = $("<div></div>").addClass("divs").css({"height": height, "width": width});
			tr.append("<td></td>").append(div);
		}
	}
	
}