let tiles = [];

let empty_tiles = [
    { "position": "0-0-0" },
    { "position": "0-1-0" },
    { "position": "0-2-0" },
    { "position": "0-3-0" },
    { "position": "0-4-0" },
    { "position": "1-0-0" },
    { "position": "1-1-0" },
    { "position": "1-2-0" },
    { "position": "1-3-0" },
    { "position": "1-4-0" },
    { "position": "2-0-0" },
    { "position": "2-1-0" },
    { "position": "2-2-0" },
    { "position": "2-3-0" },
    { "position": "2-4-0" },
    { "position": "3-0-0" },
    { "position": "3-1-0" },
    { "position": "3-2-0" },
    { "position": "3-3-0" },
    { "position": "3-4-0" },
    { "position": "4-0-0" },
    { "position": "4-1-0" },
    { "position": "4-2-0" },
    { "position": "4-3-0" },
    { "position": "4-4-0" },
    { "position": "5-0-0" },
    { "position": "5-1-0" },
    { "position": "5-2-0" },
    { "position": "5-3-0" },
    { "position": "5-4-0" },
    { "position": "6-0-0" },
    { "position": "6-1-0" },
    { "position": "6-2-0" },
    { "position": "6-3-0" },
    { "position": "6-4-0" },
    { "position": "7-0-0" },
    { "position": "7-1-0" },
    { "position": "7-2-0" },
    { "position": "7-3-0" },
    { "position": "7-4-0" }
];

//loads in stuff from cookies
    if (JSON.parse(localStorage.getItem('filled_tiles')) != null){
        tiles = JSON.parse(localStorage.getItem('filled_tiles'));
        empty_tiles = JSON.parse(localStorage.getItem('unfilled_tiles'));
        loadTiles();
    }


function loadTiles() {
    for (i = 0; i < tiles.length; i++) {
        document.getElementById(tiles[i].position).className += " " + tiles[i].tile_value;
    }
}

function newNumber() {

    if (empty_tiles.length > 0) {
        let new_position = Math.floor((Math.random() * empty_tiles.length) + 0);

        let new_tile_value = GenerateNumber();

        document.getElementById(empty_tiles[new_position].position).className += " " + new_tile_value;

        tiles.push({ "position": empty_tiles[new_position].position, "tile_value": new_tile_value },);

        empty_tiles.splice(new_position, 1);
    } else {
        alert("Tiles are full. You have lost : (");
    }

}



/**
 * Generates the number in the following format: 2, 4, 8, 16, 32, 64, 128, 256, 512
 * smallest number = 2, biggest number = 512
 * Each number has its own chance of appearing
 */
function GenerateNumber() {
    //generates a random number between 0 and 99
    let generated_num = (Math.floor((Math.random() * 100) + 0)).toString();
    switch (generated_num) {
        case "0":
            //0.01 chance of 512
            return "tile_512";
        case "1":
        case "2":
            //0.02 chance of 256;
            return "tile_256";
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            //0.07 chance of 128
            return "tile_128";
        default: {
            switch (generated_num[0]) {
                case "1":
                    //0.1 chance of 2
                    return "tile_2";
                case "2":
                    //0.1 chance of 4
                    return "tile_4";
                case "3":
                    //0.1 chance of 64
                    return "tile_64";
                case "4":
                case "5":
                    //0.2 chance of 8
                    return "tile_8";
                case "6":
                case "7":
                    //0.2 chance of 16
                    return "tile_16";
                case "8":
                case "9":
                    //0.2 chance of 32
                    return "tile_32";
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

function deleteTiles() {
    for (i = 0; i < tiles.length; i++) {
        document.getElementById(tiles[i].position).classList.remove(tiles[i].tile_value);
    }
}


function resetID() {
    if (empty_tiles == 0) {
        deleteTiles();
        empty_tiles = tiles;
        tiles = [];
        loadTiles();
    } else (alert("The board is not filled in, please fill it in before pressing clear tiles button"));
}

//saving filled and unfilled tiles in cookies
//next time user loads, the progress won;t dissapear

window.addEventListener('beforeunload', function (e) {
    tiles_cookie = JSON.stringify(tiles);
    localStorage.setItem("filled_tiles", tiles_cookie);
    tiles_cookie2 = JSON.stringify(empty_tiles);
    localStorage.setItem("unfilled_tiles", tiles_cookie2);
});




// TODO : IMPLEMENT SWIPING
// https://www.hackdoor.io/articles/build-full-featured-tinder-carousel-vanilla-javascript-cdbb2b786f77
