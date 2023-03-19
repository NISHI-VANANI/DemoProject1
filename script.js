let user_data = [];

function displayData() {
    let html = "<table border = '1' class='table'>"

    setTimeout(() => {
        html += "<thead>"
        html += "<tr>";
        html += "<td>" + "SNo." + "</td>";
        html += "<td>" + "Name" + "</td>";
        html += "<td>" + "City" + "</td>";
        html += "<td>" + "Fees" + "</td>";
        html += "<td>" + "Action" + "</td>";
        html += "</tr>";
        html += "</thead>"

        for (let i = 0; i < user_data.length; i++) {
            let sno = i + 1;
            html += "<tr>";
            html += "<td>" + sno + "</td>";
            html += "<td>" + user_data[i].name + "</td>";
            html += "<td>" + user_data[i].city + "</td>";
            html += "<td>" + `$` + user_data[i].fees + "</td>";
            html += "<td>" + `<button type="button" onclick="editItems(${i})">Edit</button><button type="button" onclick="removeItems(${i})">Delete</button>` + "</td>";
            html += "</tr>";
        }
        html += "</table>";
        document.getElementById("table").innerHTML = html
    }, 200);
}

displayData();

function addOnClick() {
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let fees = document.getElementById("fees").value;

    if (name && city && fees) {
        if (/^[0-9]+$/.test(fees)) {
            user_data.push({ name: name, city: city, fees: parseInt(fees) })
            displayData();
            clearItems();
            html_statistics();
        } else {
            alert("Please only enter numeric characters only for your Fees! (Allowed input:0-9)")
        }
    }
}



function clearItems() {
    document.getElementById("name").value = "";
    document.getElementById("city").value = "";
    document.getElementById("fees").value = "";
}

function editItems(index) {
    document.getElementById("name").value = user_data.name(index);
    document.getElementById("city").value = user_data.city(index);
    document.getElementById("fees").value = user_data.fees(index);
    displayData();
    html_statistics();
}

function removeItems(index) {
    user_data = user_data.filter((a, i) => {
        return index != i;
    })
    displayData();
    html_statistics();
}

function html_statistics() {
    let htmlData = "";
    htmlData += '1. Total fees: <label id="sum">' +user_data.reduce((total, num) =>  total + num.fees, 0)+'</label><br>'
    // htmlData += '2. Total number of students:<label id="total_students">'+user_data.length+'</label><br>'
    // htmlData += '3. Number of students whose name starts from "R":<label id="withR">'+user_data.filter(nameWithR => nameWithR.name.startsWith("R")).length+'</label> <br>'
    htmlData += '4. City name of 4th sudent:<label id="student4">' + user_data.length >= 2 ? user_data[3].city : "Not Found" + '</label> <br>'
    htmlData += '5. Total fees of 3rd and 5th student:<label id="feesOf2">' + user_data.length >= 5 ? user_data.fees[2] + user_data.fees[4] : user_data.length >= 3 ? user_data.fees[2] : "Not Found" + '</label> <br>'
    // htmlData += '6. Number of students whose fees is in between $2000 and $3900:<label id="feesBtw">'+user_data.reduce((count, std) => 2000 < std.fees && std.fees < 3900 ? count+1 : count, 0)+'</label> <br>'
    // htmlData += '7. Number of students whose fees is <$1000:<label id="feesLess">'+user_data.reduce((count, std) => std.fees < 1000 ? count+1 : count, 0)+'</label> <br>'
    // htmlData += '8. Number of students whose name starts from "S" AND City name starts from "Ch":<label id="nameAndCity">'+user_data.filter(NameANDCity => NameANDCity.name.startsWith("S") && NameANDCity.city.startsWith("Ch")).length+'</label><br>'
    // htmlData += '9. Number of students whose name starts from "J" OR City name starts from "H":<label id="nameOrCity">'+user_data.filter(NameORCity => NameORCity.name.startsWith("J") || NameORCity.city.startsWith("H")).length+'</label> <br>'
    // htmlData += '10. Find the Min and Max Fees:<label id="minMax">'+Math.max(user_data.fees)+'</label>'
    let xyz = document.getElementById("statistcs")
    xyz.innerHTML = htmlData;
}
