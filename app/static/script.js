/* Добавить блок, если есть конкуренты сайты */
function Is_it_syte_concurents(a) {
    var label = a;

    if (label=="Yes") {
        document.getElementById("Block_First_Concurent").style.display='block';
        document.getElementById("Block_Advantages").style.display='block';
        document.getElementById("Block_examples_of_advantages").style.display='block';
        document.getElementById("examples").checked = false;
        Vvod_First_Concurent.setAttribute('required', '');
        Vvod_Advantages.setAttribute('required','');
    } 
    
    if (label=="No") {
        document.getElementById("Block_First_Concurent").style.display='none';
        document.getElementById("Block_Advantages").style.display='none';
        document.getElementById("Block_examples_of_advantages").style.display='none';
        document.getElementById("examples").checked = false;
        document.getElementById("Vvod_First_Concurent").required = false;
        document.getElementById("Vvod_Advantages").required = false;
    } 
}

/* Если пользователь напишет первого конкурента, появится поле, где можно написать второго */
function Otobrazhenie_Block_Second_Concurent(a){
    var empt = a;

    if (empt == "") {
        document.getElementById("Block_Second_Concurent").style.display='none';
    }

    else {
        document.getElementById("Block_Second_Concurent").style.display='block';
    }   
}

/* Если пользователь напишет второго конкурента, появится поле, где можно написать третьего */
function Otobrazhenie_Block_Third_Concurent(a){
    var empt = a;

    if (empt == "") {
        document.getElementById("Block_Third_Concurent").style.display='none';
    }

    else {
        document.getElementById("Block_Third_Concurent").style.display='block';
    }   
}

/* Примеры целей показываются лишь тогда, когда пользователь выберет этот пункт */
function Is_it_examples_of_goals(a) {
    var vidimost = a;

    if (vidimost == "Yes") {
        document.getElementById("examples_of_goals").style.display='block';
    }

    else {
        document.getElementById("examples_of_goals").style.display='none';
    }
}

/* Примеры преимуществ показываются лишь тогда, когда пользователь выберет этот пункт */
function Is_it_examples_of_advantages(a){
    var vidimost = a;

    if (vidimost == "Yes") {
        document.getElementById("examples_of_advantages").style.display='block';
    }

    else {
        document.getElementById("examples_of_advantages").style.display='none';
    }
}

/* Описания сайтов */
function Opisanie(a) {
    var type = a;

    if (type == "Internet-Shop") {
        document.getElementById("Internet-Shop").style.display='block';
    }

    else {
        document.getElementById("Internet-Shop").style.display='none';
    }

    if (type == "Blog") {
        document.getElementById("Blog").style.display='block';
    }

    else {
        document.getElementById("Blog").style.display='none';
    }

    if (type == "Game Portal") {
        document.getElementById("Game Portal").style.display='block';
    }

    else {
        document.getElementById("Game Portal").style.display='none';
    }

    if (type == "Info Syte") {
        document.getElementById("Info Syte").style.display='block';
    }

    else {
        document.getElementById("Info Syte").style.display='none';
    }

    if (type == "Syte-Visitka") {
        document.getElementById("Syte-Visitka").style.display='block';
    }

    else {
        document.getElementById("Syte-Visitka").style.display='none';
    }

    if (type == "Educational Syte") {
        document.getElementById("Educational Syte").style.display='block';
    }

    else {
        document.getElementById("Educational Syte").style.display='none';
    }

    if (type == "Corporative Syte") {
        document.getElementById("Corporative Syte").style.display='block';
    }

    else {
        document.getElementById("Corporative Syte").style.display='none';
    }

    if (type == "Another") {
        document.getElementById("Another").style.display='block';
    }

    else {
        document.getElementById("Another").style.display='none';
    }

}

