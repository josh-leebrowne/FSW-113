const parts = [ 
    { partNbr: 'R5AQDVU', partDescr: 'Halbendozer', aisle: 'B3', qty: 14 },
    { partNbr: 'LJBKC0M', partDescr: 'Knudleknorp', aisle: 'H1', qty: 12},
    { partNbr: 'HUS51DE', partDescr: 'Knudlescheiffer', aisle: 'H1', qty: 12},
    { partNbr: 'M0XORFH', partDescr: 'Borgom Oil', aisle: 'B2', qty: 3},
    { partNbr: '35X7AP8', partDescr: 'Glundelscharf', aisle: 'C3', qty: 1},
    { partNbr: 'C1AYCAI', partDescr: 'Tschoffle', aisle: 'A4', qty: 5},
    { partNbr: 'E9IEYLS', partDescr: 'Karmandloch', aisle: 'C2', qty: 2},
    { partNbr: 'IW2I0TG', partDescr: 'Shreckendwammer', aisle: 'J4', qty: 2},
    { partNbr: '95OJTV6', partDescr: 'Dimpenaus', aisle: 'B1', qty: 16},
    { partNbr: 'LYII1MJ', partDescr: 'Lumpenknorp', aisle: 'H1', qty: 12},
    { partNbr: 'VQIL7AO', partDescr: 'Lumpenschieffer', aisle: 'H1', qty: 12},
    { partNbr: 'XF0MPS9', partDescr: 'Ratklampen', aisle: 'N2', qty: 7},
    { partNbr: 'AFU9OUG', partDescr: 'Dulpo Fittings', aisle: 'J2', qty: 4},
    { partNbr: 'E7XWGGO', partDescr: 'Flugtrimsammler', aisle: 'B3', qty:3 },
    { partNbr: '981FNC9', partDescr: 'Grosstramle', aisle: 'A1', qty: 1},
    { partNbr: 'AGSXYVZ', partDescr: 'Skirpenflatch', aisle: 'B2', qty: 2},
    { partNbr: 'V0SK0UX', partDescr: 'Lumpenmagler', aisle: 'H1', qty: 12},
    { partNbr: 'CTL40Z1', partDescr: 'Lumpenflempest', aisle: 'H1', qty: 24},
    { partNbr: 'POO9ZPM', partDescr: 'Eumonklippen', aisle: 'D2', qty: 7},
    { partNbr: 'WEYPU3Z', partDescr: 'Mumpenflipper', aisle: 'E3', qty: 1}

]


// list of each part number and qty for check-off in the "detailsList" element

// if parts requiring special handling exist (in aisle B3), list of items needing 
// special packaging in the "specialPackaging" element, else remove element

// if hazardous parts exist (in aisle J4), let employee know in the "hazardousMaterials"
// element and remind them to get gloves, else remove element

// if all items in the order are small parts (aisle H1), then let employee know that they should take 
// a basket and go dirctly to aisle H1

// if there are large items (anthing in aisles S, T, or U), then let the employee know in the "forkiftNeeded"
// element that they will need to reserve a forklift, else remove the element

// sum up the total number of parts and append that number to the text already in "totalItems" element


// Order Details
partsList = document.getElementById("detailsList");

for (x = 0; x < parts.length; x++){
    var partDetail = "Part Number: " + parts[x].partNbr + "Part Description: " + parts[x].partDescr;
    let part = document.createElement("h2");
    part.textContent = partDetail;
    document.getElementById("detailsList").appendChild(part);


    var partsAisle = parts[x].aisle;

    if (partsAisle === "B3"){
        var specialPart = `Special Packaging: ${parts[x].partDescr}`;
        let special = document.createElement("h3");
        special.textContent = specialPart;
        console.log(specialPart);
        document.getElementById("specialPackaging").appendChild(special);
    }
    else {console.log("Error")}

    if(partsAisle === "J4"){
        var hazardPart = `Hazardous Parts:  ${parts[x].partDescr}`;
        let hazard = document.createElement("h3");
        hazard.textContent = hazardPart;
        console.log(hazardPart)
        document.getElementById("hazardousMaterials").appendChild(hazard);
    }
    else {console.log("Error")}

    if(partsAisle === "H1"){
        var smallItem = `Take ${parts[x].partDescr} to aisle H1`;
        let small = document.createElement("h3");
        small.textContent = smallItem;
        console.log(smallItem);
        document.getElementById("smallItemsOnly").appendChild(small);
    }
    else {console.log("Error")}
}



const totalItems = parts.reduce(function(currentTotal, part){
    return part.qty + currentTotal
}, 0);
document.querySelector("#totalItems").textContent = `Total Items: ${totalItems}`;


