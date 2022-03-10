//compound interest calculator
function calculate()
{
    p = document.getElementById("principal").value;
    n = document.getElementById("myRange").value;
    r = document.getElementById("interest").value;
    a = document.getElementById("monthly").value;
    result = document.getElementById("result");
           
    var rd = r/100;        
    var mr = rd/12;
    var te = (1+mr);
    m = n*12;
    res = p;
    inter = 0;
        for (i = 0; i < m; i++) {
            holding_bi = Number(res)+Number(a);   		 	
            res = Number(holding_bi) * (1 + Number(mr));
            inter = Number(inter) + ((Number(holding_bi) * (1 + Number(mr))) - Number(holding_bi));
            }
        total = res.toFixed(2); 
        profits = inter.toFixed(2);
           
        var data = new Array();
        data.push(["Total Funds", "Profits", "Regular savings"]);
        data.push([total, profits, "Is a joke !"]);
        
        //Create a HTML Table element.
        var table = $("<table />");
        table[0].border = "1";
 
        //Get the count of columns.
        var columnCount = data[0].length;
 
        //Add the header row.
        var row = $(table[0].insertRow(-1));
        for (var i = 0; i < columnCount; i++) {
            var headerCell = $("<th />");
            headerCell.html(data[0][i]);
            row.append(headerCell);
        }
 
        //Add the data rows.
        for (var i = 1; i < data.length; i++) {
            row = $(table[0].insertRow(-1));
            for (var j = 0; j < columnCount; j++) {
                var cell = $("<td />");
                cell.html(data[i][j]);
                row.append(cell);
            }
        }
 
        var dvTable = $("#table");
        dvTable.html("");
        dvTable.append(table);

            
            
}
