var data_s = [
    { name: "Nishi", city: "Blr", fees: "2000" }
];

function displayData() {
    var html = "<table border = '1' class='table'>"

    setTimeout(() => {
        html += "<thead>"
        html += "<tr>";
        // html += "<td>" + "SNo." + "</td>";
        html += "<td>" + "Name" + "</td>";
        html += "<td>" + "City" + "</td>";
        html += "<td>" + "Fees" + "</td>";
        html += "<td>" + "Action" + "</td>";
        html += "</tr>";
        html += "</thead>"

        for (var i = 0; i < data_s.length; i++) {
            var sno = i + 1;
            html += "<tr>";
            html += "td>" + sno + "</td>";
            html += "<td>" + data_s[i].name + "</td>";
            html += "<td>" + data_s[i].city + "</td>";
            html += "<td>" + data_s[i].fees + "</td>";
            html += "<td>" + `<button type="button" onclick="removeItem(${data_s[i].id})">Delete</button>` + "</td>";
            html += "</tr>";
        }
        html += "</table>";
        document.getElementById("table").innerHTML = html
    }, 200);
}

displayData();

function addOnClick() {
    var name = document.getElementById("name").value;
    var city = document.getElementById("city").value;
    var fees = document.getElementById("fees").value;

    if (name && city && fees) {
        let id = data_s.length + 1;
        data_s.push({ name: name, city: city, fees: fees, id:id })
        displayData();
        clearItems();
    }
}

function clearItems () {
    document.getElementById("name").value = "";
    document.getElementById("city").value = "";
    document.getElementById("fees").value = "";
}

function editItems () {
    document.getElementById("name").value
}

function removeItem (rec) {
     console.log(rec);
     var filt = data_s.filter ((a,i) => {
        if(rec == a.id) {
            data_s.splice(i,1);
            displayData();
        }
     })
       console.log(data_s); 
     }
