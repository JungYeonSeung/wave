export class Point {
    constructor(index, x, y) {    //index 값을 넘겨줘서 현재 Point가 몇 번째 Point인지를 정의 해줍니다.
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.speed = 0.02;
        this.cur = index;
        this.max = Math.random() * 100 + 150;   //얼마만큼 움직일 것인가에 대한 Max값
    }
    //간격을 가진 좌표를 하나씩 만들어서 좌표의 Y값을 아래위로 이동시키고
    //각각의 좌표를 하나의 선으로 연결하는걸 그린다고 생각하면 쉬울것이다.


    update() {
        this.cur += this.speed;
        this.y = this.fixedY + (Math.sin(this.cur) * this.max);
    }
}


