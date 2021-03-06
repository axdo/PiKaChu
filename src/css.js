const string = `
.skin *{box-sizing: border-box;margin: 0;padding: 0;}
.skin *::before,.skin *::after{box-sizing: border-box;}

.skin{
    background: #FFE500; 
    height: 50vh;
    position: relative;
    
}
.nose{
    border:10px solid black;
    border-color: black transparent blue transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: absolute;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;
}
@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(15deg);
    }
    66%{
        transform: rotate(-15deg);
    }
    100%{
transform: rotate(0deg);
    }
}
.nose:hover{
    transform-origin: center bottom;
    animation: wave 1s infinite linear;
}
.yuan{
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background: black;
}

.eye{
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    position: absolute;
    top: 100px;
    left: 50%;
    margin-left: -32px;
    background: #2E2D2E;
    border-radius: 50%;
}
.eye::before{
    content:'';
    display: block;
    border: 3px solid #000;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 8px;
    top: 2px;
}

.eye.left{
    transform: translateX(-100px);
}

.eye.right{
    transform: translateX(100px);
}

.mouth{
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
}

.mouth .up{
    position: relative;
    top: -20px;
    z-index: 1;
}
.mouth .up .lip{
    border:3px solid black;
    width: 100px;
    height: 30px;
    border-top-color: transparent;
    border-right-color: transparent;
    border-left-color: transparent;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    background: #FFE500;
}
.mouth .up .lip.left{
    
    border-radius: 0 0 0 50px;
    
    transform: rotate(-15deg) translateX(-53px);

    
}
.mouth .up .lip.right{
    
    border-radius: 0 0 50px 0;
    
    transform: rotate(15deg) translateX(53px);
}
.mouth .up .lip::before{
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #FFE500;
}
.mouth .up .lip.left::before{
    
    right: -6px;
    
}
.mouth .up .lip.right::before{
    
    left: -6px;
    
}
.mouth .down{
    height: 180px;
    position: absolute;
    top: 5px;
    width: 100%;
    overflow: hidden;
}
.mouth .down .yuan1{
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #9C000C;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -150px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
    background: #FF4760;
}

.face{
    position: absolute;
    left: 50%;
    border:2px solid black;
    width: 88px;
    height: 88px;
    top:200px;
    margin-left: -44px;
    z-index: 3;
}
.face > img{
    position: absolute;
    top: 50%;
    left: 50%;
}
.face.left{
    transform: translateX(-180px);
    background: #FF1800;
    border-radius: 50%;
}
.face.left > img{
    transform: rotateY(180deg);
    transform-origin: 0 0;
}
.face.right{
    transform: translateX(180px);
    background: #FF1800;
    border-radius: 50%;
}

`

export default string;