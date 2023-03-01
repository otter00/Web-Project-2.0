var Database_Name = 'Animation Studios';    
var Version = 1.0;    
var Text_Description = 'Studios database';    
var Database_Size = 2 * 1024 * 1024;    
var dbObj = openDatabase(Database_Name, Version, Text_Description, Database_Size);    
dbObj.transaction(function (tx) {    
    tx.executeSql('CREATE TABLE IF NOT EXISTS Studios_Table (id unique, Name, Country)');  
});    

function Insert() {    
    var id = document.getElementById("tbID").value;    
    var name = document.getElementById("tbName").value;    
    var location = document.getElementById("tbLocation").value;    
    dbObj.transaction(function (tx) {    
        tx.executeSql('insert into Studios_Table(id, Name, Country) values(' + id + ',"' + name + '","' + location + '")');    
    });    
}    
dbObj.transaction(function (tx) {    
    tx.executeSql('SELECT * FROM Studios_Table', [], function (tx, results) {    
        var len = results.rows.length, i;    
        var str = '';    
        for (i = 0; i < len; i++) {    
        str += "<tr>";    
        str += "<td>" + results.rows.item(i).id + "</td>";    
        str += "<td>" + results.rows.item(i).Name + "</td>";    
        str += "<td>" + results.rows.item(i).Country + "</td>";    
        str += "</tr>";    
        document.getElementById("tblGrid").innerHTML += str;    
        str = '';    
        }    
    }, null);    
});