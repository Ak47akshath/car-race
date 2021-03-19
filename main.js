canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;
car2_width = 120;
car2_height = 70;
car2_image = "car-2.png";
car2_x = 10;
car2_y = 100;


background_image = "racing.jpg";

function add() {
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;
    car1_imageTag = new Image();
    car1_imageTag.onload = uploadCar1;
    car1_imageTag.src = car1_image;
    car2_imageTag = new Image();
    car2_imageTag.onload = uploadCar2;
    car2_imageTag.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1() {
    ctx.drawImage(car1_imageTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadCar2() {
    ctx.drawImage(car2_imageTag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up1();
        console.log("up");
    }
    if (keyPressed == '40') {
        down1();
        console.log("down");
    }
    if (keyPressed == '37') {
        left1();
        console.log("left");
    }
    if (keyPressed == '39') {
        right1();
        console.log("right");
    }
    if (keyPressed == '87') {
        up2();
        console.log("up");
    }
    if (keyPressed == '83') {
        down2();
        console.log("down");
    }
    if (keyPressed == '65') {
        left2();
        console.log("left");
    }
    if (keyPressed == '68') {
        right2();
        console.log("right");
    }
}

function up1() {
    if (car1_y >= 0) {
        car1_y = car1_y - 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }

}

function down1() {
    if (car1_y <= 500) {
        car1_y = car1_y + 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }


}

function left1() {
    if (car1_x >= 0) {
        car1_x = car1_x - 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }

}

function right1() {
    if (car1_x <= 700) {
        car1_x = car1_x + 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }

}

function up2() {
    if (car2_y >= 0) {
        car2_y = car2_y - 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }

}

function down2() {
    if (car2_y <= 500) {
        car2_y = car2_y + 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }


}

function left2() {
    if (car2_x >= 0) {
        car2_x = car2_x - 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }

}

function right2() {
    if (car2_x <= 700) {
        car2_x = car2_x + 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }


}
if (car1_x > 700) {
    console.log("car1");
    document.getElementById('note').innerHTML = "Car 1 Won!!";
} else if (car2_x > 700) {
    console.log("car2");
    document.getElementById('note').innerHTML = "Car 2 Won!!";
}
