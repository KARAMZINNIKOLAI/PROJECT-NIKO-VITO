/* Добавить блок, если есть конкуренты сайты */
function Is_it_syte_concurents(a) {
    var label = a;

    if (label=="Yes") {
        document.getElementById("Block_First_Concurent").style.display='block';
        document.getElementById("Advantages").style.display='block';
    } 
    
    if (label=="No") {
        document.getElementById("Block_First_Concurent").style.display='none';
        document.getElementById("Advantages").style.display='none';
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
