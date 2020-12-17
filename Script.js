let tiles = [
    {"position":"0-1-0", "tile_value":"tile_2"},
    {"position":"0-2-0", "tile_value":"tile_4"},
    {"position":"0-3-0", "tile_value":"tile_8"}   
]

function loadTiles(){
    for (i = 0; i < tiles.length; i++) {
        document.getElementById(tiles[i].position).className += " " + tiles[i].tile_value;
    }
}




/**
 * Generates the number in the following format: 2, 4, 8, 16, 32, 64, 128, 256, 512
 * smallest number = 2, biggest number = 512
 * Each number has its own chance of appearing
 */
function GenerateNumber() {
    //generates a random number between 0 and 99
    let generated_num = Math.floor((Math.random() * 100) + 0);

    switch (generated_num) {
        case 0:
            //0.01 chance of 512
            return 512;
        case 1:
        case 2:
            //0.02 chance of 256;
            return 256;
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            //0.07 chance of 128
            return 128;
        default: {
            switch (generated_num[0]) {
                case 1:
                    //0.1 chance of 2
                    return 2;
                case 2:
                    //0.1 chance of 4
                    return 4;
                case 3:
                    //0.1 chance of 64
                    return 64;
                case 4:
                case 5:
                    //0.2 chance of 8
                    return 8;
                case 6:
                case 7:
                    //0.2 chance of 16
                    return 16;
                case 8:
                case 9:
                    //0.2 chance of 32
                    return 32;
            }
        }
    }
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
                dID = r + ',' + c + ',' + 0;

                document.getElementsByClassName("cell")[i].id = dID;
                console.log(dID);

                c++;
            }
            r++;
        }
    }

};
