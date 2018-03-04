function drawfirstpie() {
	//var data1 = new google.visualization.DataTable();
  var data1 = google.visualization.arrayToDataTable([
  ['Data', 'Percentage'],
  ['Data on disk', 18],
  ['Fragmentation', 2],
  ['Remaining compression saved', 30],
  ['Deduplication Saved', 50]
]);
//google.setOnLoadCallback(function() { drawChart(data1); });
drawChart(data1, 'Overall efficiency', 'overall_efficiency');
data1 = google.visualization.arrayToDataTable([
  ['Data', 'Percentage'],
  ['Compressed', 43],
  ['Data Saved', 57],
]);
drawChart(data1, 'Compression', 'compression_pie');
alert('1');
 var options = {'title':'How Much Pizza I Ate Last Night',
                       'width':400,
                       'height':300};
					   alert('2');
		chart = new google.visualization.PieChart(document.getElementById('chart_div'));
		alert('3');
        //google.visualization.events.addListener(chart, 'select', selectHandler);
		alert('4');
          dataTable = new google.visualization.DataTable();
alert('5');
          // var newData = [['Year', 'Sales'],
            // ['2004',  1000 ],
            // ['2005',  1170 ],
            // ['2006',  660 ],
            // ['2007',  1030 ],
            // ['2008',  1530 ]]
			var newData = []
alert('6');
			newData.push(['Year', 'Sales']);
			newData.push(['2004',  1000 ]);
alert('7');
          // determine the number of rows and columns.
          var numRows = newData.length;
          var numCols = newData[0].length;
		  
		  alert(numCols);

          // in this case the first column is of type 'string'.
          dataTable.addColumn('string', newData[0][0]);

          // all other columns are of type 'number'.
          for (var i = 1; i < numCols; i++)
            dataTable.addColumn('number', newData[0][i]);           

          // now add the rows.
          for (var i = 1; i < numRows; i++)
            dataTable.addRow(newData[i]);            

          // redraw the chart.
		  alert('snb');
		  
		 
          chart.draw(dataTable, options);        
alert('snb1');
}