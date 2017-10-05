/*Task 1.1 --> Task 4*/
function getHomeNames( arrHome ) {
    return arrHome.map(function(item){
        return item.homeName;
    });
}

/*Task 1.2*/
function searchHome( id ) {
    /* return home.filter(function(item){
         return item._id === id;
     })[0] || -1;*/

    var elem = -1;

    home.forEach(function (item) {
        if( item._id === id ) elem = item;
    });

    return elem;
}

/*Task 2 --> Task 5*/
var select = document.getElementById('count');
var inputEdit = document.getElementById('editHomeName');

select.addEventListener("click", function ( event ) {
    var index = event.target.selectedIndex;

    inputEdit.value = event.target[index].innerHTML;

    /*Task 2
    alert( event.target[index].innerHTML );*/
});


/*Task 3*/
var btnAdd = document.querySelector('.btn-add');

btnAdd.addEventListener('click', function () {
    var option = document.createElement('option');
    var inputAdd = document.getElementById('addHomeName');

    option.text = inputAdd.value;
    select.appendChild(option);

    inputAdd.value = '';
});

/*Task 4*/
var homes = getHomeNames( home );

homes.forEach(function (item) {
    var option = document.createElement('option');

    option.value = item;
    option.innerHTML = item;
    select.appendChild(option);
});

/*Task 5 --> Task 7*/
var btnEdit = document.querySelector('.btn-edit');

btnEdit.addEventListener( 'click', function() {
    var textOption = select.options[select.selectedIndex];

    if ( inputEdit.value == '' || inputEdit.value.replace(/\s/g,'') == '' || inputEdit.value.length < 3 ) {
        inputEdit.classList.add('error');
        btnEdit.classList.add('error');
    }
    else textOption.innerHTML = inputEdit.value.trim();
});


/*Task 7*/
inputEdit.onkeypress = function () {
    inputEdit.classList.remove('error');
    btnEdit.classList.remove('error');
};







