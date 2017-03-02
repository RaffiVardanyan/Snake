/**
 * Created by RV on 02/03/17.
 */
function Direction(row, col, name) {
    this.dRow = row;
    this.dCol = col;
    this.name = name;
}

Direction.UP = new Direction(-1, 0, "Up");
Direction.DOWN = new Direction(1, 0, "Down");
Direction.LEFT = new Direction(0, -1, "Left");
Direction.RIGHT = new Direction(0, 1, "Right");


