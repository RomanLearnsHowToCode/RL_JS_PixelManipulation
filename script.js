console.log("I am indeed connected");

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 799;
canvas.height = 950;

const image1 = new Image();
image1.src = './Assets/backToTheFuture.jpg';


/*
This function will scan the loaded image,
then it will count average colour of each pixel, will divide it by 3 and set average colour to each RGB value
where C1, C2 and C3 are modifing values
*/

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
}
colourAverage(0,0,0);