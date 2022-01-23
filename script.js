const image1 = new Image();
image1.src = './Assets/backToTheFuture.jpg';

image1.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 799;
    canvas.height = 950;

    ctx.drawImage(image1, 0,0,canvas.width,canvas.height);

    let particlesArray = [];
    const numberOfParticles = 10000;

    class Particle {
        constructor(){
            this.x = Math.random() * canvas.width;
            this.y = Math.random();
            this.speed = 0;
            this.velocity = Math.random() * 5;
            this.size = Math.random() * 1.5 + 1;
        }
        update(){
            this.y += this.velocity;
            if(this.y >= canvas.height){
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }
        }
        draw(){
            ctx.beginPath();
            ctx.fillStyle = 'white';
            ctx.arc(this.x, this.y, this.size, 0, Math.PI *2);
            ctx.fill();
        }
    }
    function init(){
        for (let i = 0; i < numberOfParticles; i++){
            particlesArray.push(new Particle);
        }
    }
    init(); // call init to fill the array
    function animate(){
        ctx.drawImage(image1, 0,0,canvas.width,canvas.height);
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fillRect(0,0,canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++){
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
    }
    animate();
});


/*
This function will scan the loaded image,
then it will count average colour of each pixel, will divide it by 3 and set average colour to each RGB value
where C1, C2 and C3 are modifing values
*/
/*
function colourAverage(c1,c2,c3){
    image1.addEventListener('load', function(){ // callback function to wait until the image is loaded
        ctx.drawImage(image1, 0,0);
        // Uint8ClampedArray(3036200) type of object, colour values of each individual pixel, each pixel has got 4 elements for RGBA 
        const scannedImage = ctx.getImageData(0,0, canvas.width, canvas.height);
        const scannedData = scannedImage.data;

        for (let i = 0; i < scannedData.length; i += 4){
            const total = scannedData[i] + scannedData[i+1] + scannedData[i+2];
            const averageColorValue = total/3;
            scannedData[i] = averageColorValue+c1;
            scannedData[i+1] = averageColorValue+c2;
            scannedData[i+2] = averageColorValue+c3;
        };

    
        scannedImage.data = scannedData;
        ctx.putImageData(scannedImage, 0,0);
    })
}*/
//colourAverage(0,0,0);