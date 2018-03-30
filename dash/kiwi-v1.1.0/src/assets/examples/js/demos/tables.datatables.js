$(function() {
	$('#datatables-example-1').DataTable({
		"order": [[4, "asc"]],
		rowReorder: {
            selector: 'td:nth-child(1)'
        },
		responsive: true
	});
	$('#datatables-example-2').DataTable({
		ajax: '../data/json/dataTable.json',
		responsive: true,
		keys: true
	});
});