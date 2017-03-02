/**
 * Created by RV on 02/03/17.
 */
function Position(row, col) {
    this.row = row;
    this.col = col;
}


Position.prototype.movedBy = function (dir){
    return new Position(this.row + dir.dRow, this.col + dir.dCol);
};