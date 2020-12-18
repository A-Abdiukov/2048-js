//tiles[] contains information about occupied tiles, including:
//1. position - position of occupied tile
//2. tile_value -  value of occupied tile
let tiles = [];


//empty_tiles[] contains information about empty tiles, including:
//1. position - position of empty tiles
let empty_tiles = [
    { "position": "0-0" }, { "position": "0-1" }, { "position": "0-2" },
    { "position": "0-3" }, { "position": "0-4" },
    { "position": "1-0" }, { "position": "1-1" }, { "position": "1-2" },
    { "position": "1-3" }, { "position": "1-4" },
    { "position": "2-0" }, { "position": "2-1" }, { "position": "2-2" },
    { "position": "2-3" }, { "position": "2-4" },
    { "position": "3-0" }, { "position": "3-1" }, { "position": "3-2" },
    { "position": "3-3" }, { "position": "3-4" },
    { "position": "4-0" }, { "position": "4-1" }, { "position": "4-2" },
    { "position": "4-3" }, { "position": "4-4" },
    { "position": "5-0" }, { "position": "5-1" }, { "position": "5-2" },
    { "position": "5-3" }, { "position": "5-4" },
    { "position": "6-0" }, { "position": "6-1" }, { "position": "6-2" },
    { "position": "6-3" }, { "position": "6-4" },
    { "position": "7-0" }, { "position": "7-1" },
    { "position": "7-2" }, { "position": "7-3" }, { "position": "7-4" }
];

//if local storage is not null, tiles[] and empty_tiles[] arrays are loaded from local storage.
// where does it load it from? - have a look at window.addEventListener('beforeunload', function (e)
//afterwards loadTiles() function is called 
if (JSON.parse(localStorage.getItem('filled_tiles')) != null) {
    tiles = JSON.parse(localStorage.getItem('filled_tiles'));
    empty_tiles = JSON.parse(localStorage.getItem('unfilled_tiles'));
    loadTiles();
}

//populates every tile by getting values from tiles[] array
function loadTiles() {
    for (i = 0; i < tiles.length; i++) {
        document.getElementById(tiles[i].position).className += " " + tiles[i].tile_value;
    }
}

// newNumber() function adds a tile to the board
//1. Checks that there is an empty tile, otherwise displays a message that you have lost
//2. Assigns a new position where the new tile shall appear (new_tile_position)
//2.1. new_tile_position is a random generated number between 0 and the length of the empty_tiles array 
//3. The value of the new tile is generated with GenerateNumber() function (new_tile_value)
//4. The tile that has (new_tile_position) gets assigned the class (new_tile_value)
//5. The tile that has was added gets added to the titles[] array
//6. The tile that has been added gets removed from the empty_tiles[] array
function newNumber() {
    if (empty_tiles.length > 0) {
        let new_tile_position = Math.floor((Math.random() * empty_tiles.length));
        let new_tile_value = GenerateNumber();

        document.getElementById(empty_tiles[new_tile_position].position).className += " " + new_tile_value;
        tiles.push({ "position": empty_tiles[new_tile_position].position, "tile_value": new_tile_value },);
        empty_tiles.splice(new_tile_position, 1);
    } else {
        alert("Tiles are full. You have lost :( ");
    }
}

// Generates a tile class (or tile_value) number e.g tile_512, tile_256
// Each number has its own unique chance of appearing (as specified by Naiem)
function GenerateNumber() {
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

// resetID clears every tile 
// Afterwards all the information get transferred from tiles[] array to empty_tiles[] array
// tiles[] array gets cleared
function resetID() {
    if (empty_tiles == 0) {
        
        for (i = 0; i < tiles.length; i++) {
            document.getElementById(tiles[i].position).classList.remove(tiles[i].tile_value);
        }
        empty_tiles = tiles;
        tiles = [];
    } else (alert("The board is not filled in, please fill it in before pressing clear tiles button"));
}

// When the user closes the page, before closing the following hapepns:
// 1. tiles[] array gets added to the local storage as "filled_tiles"
// 2. empty_tiles[] array gets added to the local storage as "unfilled_tiles"

window.addEventListener('beforeunload', function (e) {
    tiles_cookie = JSON.stringify(tiles);
    localStorage.setItem("filled_tiles", tiles_cookie);
    tiles_cookie2 = JSON.stringify(empty_tiles);
    localStorage.setItem("unfilled_tiles", tiles_cookie2);
});

//---------------------------------
//-- CODE THAT IMPLEMENTS SWIPING --
//---------------------------------

var hammertime = new Hammer(document.body);

hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

hammertime.on("swiperight", function (event) {
    alert("Right swipe!");
});


hammertime.on("swipeleft", function (event) {
    alert("Left swipe!");
});


hammertime.on("swipedown", function (event) {
    alert("Down swipe!");
});

hammertime.on("swipeup", function (event) {
    alert("Up swipe!");
});

//-------------------------
//-- END OF SWIPING  CODE --
//-------------------------


//-----------------------------
// NOT FINISHED CODE IS BELOW
//-----------------------------


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
