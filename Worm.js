/**
 * Created by RV on 02/03/17.
 */
function Worm(bodyParts, dir) {
    this.bodyParts = bodyParts;
    this.currentDir = dir;
    this.head = bodyParts[0];
    this.tail = bodyParts[bodyParts.length-1];
}

Worm.prototype.getHead = function(){
    return this.head;
};
Worm.prototype.getBodyParts = function(){
    return this.bodyParts;
};
Worm.prototype.move = function (dir) {
    for(i=this.bodyParts.length-1; i>0; i--){
        this.bodyParts[i] = this.bodyParts[i-1];
    }
    this.bodyParts[0].movedBy(dir);
};