function GenerateNumber() {
    //number in the following 2, 4, 8, 16, 32, 64, 128, 256, 512


}

//cell ID is a memeber of 3D materix first 2 nubmers for position on the grid 
//the third number is 0 for empty cells or 1 for cells occupied by a tile  (row,col,occ)

function resetCell(ID) {
    //takes the id of the cell
    //removes the inner text withing div
    //removes styling class (tile_xxx)

}

function mergeR() {  //merge cells to the right

}

function mergeV() {  //merge cells vertically to the bottom

}

function mergeCenter() { //merge 3 horizontal cells into the center

}

function blinkingBorder() { //will be used in the serving row for new tiles until user choses a location

}

function clicked(ID) { //takes the id of the cell that has been clicked
    //if id end with 1 (ie, cell is occuppied, do nothing)
}

function resetID() {

    var dID; //default ID    
    var r = 0;    //row index max 7
    var c = 0;    //col index max 4

    arrCells = document.getElementsByClassName("cell");

    for (i = 0; i <= arrCells.length; i++) {

        while (r < 8) {
            c = 0;
            while (c < 5) {

                //dID = '"' + r + ',' + c + ',' + 0 + '"';
                dID = r + ',' + c + ',' + 0 ;
          
                document.getElementsByClassName("cell")[i].id = dID;
                console.log(dID);
          
                c++;
            }
            r++;
        }
//        console.log(arrCells[i].id);
    }

};
