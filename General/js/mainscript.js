


// all function calls needs to be organised either via making various JS scripts for each page or by calling them by checking
// nameof the page they are on


// index.html code

function loadPostcodeTable() {
    try {
        var xhttp;
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById('postcodeLoadContainer').innerHTML = this.responseText;
            };
        }
        xhttp.open('GET','General/Functions/loadPostcodeTable.php',true);
        xhttp.send();
    } catch(err) {console.log(err)}
}

loadPostcodeTable();

//                                                     viewPostcodes.html functions

// loads the postcodes into dropdown
function viewPostcodesLoad() {
    try {
        var xhttp;
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById('areaDropdown').innerHTML = this.responseText;
            };
        }
        xhttp.open('GET','../Functions/loadPostcodesDropdown.php',true);
        xhttp.send();
    } catch(err) {console.log(err)}
}



function viewPostcodesAssign() {
    try {
        document.getElementById('areaDropdown').addEventListener('change', function (e) {
            e.preventDefault();
            postcodeID = document.getElementById('areaDropdown').value;
            $('#viewPostcodesContainer').load('../Functions/dropdownSearch.php', {id:postcodeID}, function (data, status) {
            })
        })
    } catch (err) {console.log(err)}
}

// this needs to be done so that it calls the function when a specific page loads
viewPostcodesLoad();
viewPostcodesAssign();
//                                                      addPostcodes.html

function loadAreasDropdown() {
    try {
        var xhttp;
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById('areaDropdownAddForm').innerHTML = this.responseText;
            };
        }
        xhttp.open('GET','../Functions/loadAreas.php',true);
        xhttp.send();
    } catch (err) {console.log(err)}
}

function assignAddPostcode() {
    try {
        document.getElementById('addPostcodeForm').addEventListener('submit', function (e) {
            e.preventDefault();
            z = document.getElementById('areaDropdownAddForm').value;
            x = document.getElementById('addPostcodeInput').value;
            y = document.getElementById('addPostcodeCharge').value;
            $('#addPostcodeFrame').load('../Functions/addPostcode.php', {area: z, postcode: x, charge: y}, function (data, status) {
            })
        })
    } catch (err) {console.log(err)}
}
// this needs to be done so that it calls the function when a specific page loads
loadAreasDropdown();
assignAddPostcode();


//                                                      editPostcodes.html

function editPostcodesLoad() {
    try {
        var xhttp;
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById('areaDropdownEditPostcode').innerHTML = this.responseText;
            };
        }
        xhttp.open('GET','../Functions/loadPostcodesDropdown.php',true);
        xhttp.send();
    } catch(err) {console.log(err)}
}

function editPostcodesDropdownAssign() {
    try {
        document.getElementById('areaDropdownEditPostcode').addEventListener('change', function (e) {
            e.preventDefault();
            postcodeID = document.getElementById('areaDropdownEditPostcode').value;
            $('#editPostcodeLoad').load('../Functions/dropdownSearch.php', {id:postcodeID}, function (data, status) {
            })
        })
    } catch (err) {console.log(err)}
}

editPostcodesLoad();
editPostcodesDropdownAssign();

//                                                      deletePostcodes.html

function deletePostcodesLoad() {
    try {
        var xhttp;
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById('areaDropdownDeletePostcode').innerHTML = this.responseText;
            };
        }
        xhttp.open('GET','../Functions/loadPostcodesDropdown.php',true);
        xhttp.send();
    } catch(err) {console.log(err)}
}

function deleteFunction() {
    try {
    document.getElementById('deletePostcodeForm').addEventListener('submit', function (e) {
        e.preventDefault();
        postcodeID = document.getElementById('areaDropdownDeletePostcode').value;
        $('#deletePostcodeFrame').load('../Functions/deletePostcode.php', {id:postcodeID}, function (data, status) {
            
        })
    })
    } catch (err) {console.log(err)}
}

deletePostcodesLoad();
deleteFunction();

//                          ----------------------                areas                 ----------------------


// addAreas.html

function addAreaFunction() {
    try {
        document.getElementById('editAreasForm').addEventListener('submit', function (e) {
            e.preventDefault();
            areaName = $('#addAreaInput').val();
            areaCharge = $('#addChargeInput').val();
            
        })
    } catch (err) {console.log(err)}
}

function assignSubmitFunction() {
    try {
        document.getElementById('addAreasForm').addEventListener('submit', function (e) {
            e.preventDefault();
            areaName = document.getElementById('addAreaInput').value;
            areaCharge = document.getElementById('addChargeInput').value;
            $('#responseFrame').load('../Functions/addArea.php', {name: areaName, charge: areaCharge}, function (data, status) {
            })
            document.getElementById('addAreaInput').value = '';
            document.getElementById('addChargeInput').value = '';
        })
    } catch (err) {console.log(err)}
}

addAreaFunction();
assignSubmitFunction();

// deleteAreas.html

function loadAreasDropdownDelete() {
    try {
        var xhttp;
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById('deleteAreaDropdown').innerHTML = this.responseText;
            };
        }
        xhttp.open('GET','../Functions/loadAreas.php',true);
        xhttp.send();
    } catch (err) {console.log(err)}
}

loadAreasDropdownDelete();

function dropdownAreaSearch() {
    try {
        document.getElementById('deletePostcodeForm').addEventListener('submit', function (e) {
            e.preventDefault();
            postcodeID = document.getElementById('areaDropdownDeletePostcode').value;
            $('#deletePostcodeFrame').load('../Functions/deletePostcode.php', {id:postcodeID}, function (data, status) {
                
            })
        })
    } catch (err) {};
}

function assignDeleteFunction() {
    try {
        document.getElementById('deleteAreaForm').addEventListener('submit', function (e) {
            e.preventDefault();
            areaID = document.getElementById('deleteAreaDropdown').value;
            state = document.getElementById('removeAllPostcodes').value;
                

        })
    } catch (err) {console.log(err)}
}

// editAreas.html

function loadAreasDropdownEditArea() {
    try {
        var xhttp;
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById('areaDropdownEditAreas').innerHTML = this.responseText;
            };
        }
        xhttp.open('GET','../Functions/loadAreas.php',true);
        xhttp.send();
    } catch (err) {console.log(err)}
}

function dropdownEditAreasSearch() {
    try {
        document.getElementById('areaDropdownEditAreas').addEventListener('change', function (e) {
            e.preventDefault();
            postcodeID = document.getElementById('areaDropdownEditAreas').value;
            $('#EditAreaLoad').load('../Functions/dropdownAreasSearch.php', {id:postcodeID}, function (data, status) {
                
            })
        })
    } catch (err) {console.log(err)}
}

function assignEditFunction() {
    try {
        document.getElementById('editAreasForm').addEventListener('submit', function (e) {
            e.preventDefault();
            newCharge = document.getElementById('editAreaInput').value;
            areaID = document.getElementById('areaDropdownEditAreas').value;
            $('#editAreaResponse').load('../Functions/editArea.php', {id: areaID, charge: newCharge}, function (data, status) {

            })
            document.getElementById('editAreaInput').value = '';
            document.getElementById('areaDropdownEditAreas').value = '';
            document.getElementById('EditAreaLoad').value = '';
        })
    } catch (err) {console.log(err)}
}

loadAreasDropdownEditArea();
dropdownEditAreasSearch();
assignEditFunction();

// viewAreas.html

function loadAreasTable() {
    try {
        var xhttp;
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById('viewAreasContainer').innerHTML = this.responseText;
            };
        }
        xhttp.open('GET','../Functions/loadAreasTable.php',true);
        xhttp.send();
    } catch (err) {}
}

loadAreasTable();

// for the search bar

function assignSearchBar() {
    try {
        console.log('This is being run')
        var formBars = document.querySelectorAll('formBar');
        formBars.forEach(function (x) {
            x.addEventListener('submit', function (e) {
                e.preventDefault();
                data = x.value;
                $('#searchContainer').load('../Functions/searchBar.php', {data: data}, function (data, status) {
                    console.log('This is being run')
                })
            })
        })
    } catch (err) {console.log(err)}
}

assignSearchBar();





