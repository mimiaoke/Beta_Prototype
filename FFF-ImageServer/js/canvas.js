var canvas = new fabric.Canvas(document.getElementById('canvasId'),{backgroundcolor:'bule'});
canvas.isDrawingMode = true;


canvas.freeDrawingBrush = new fabric.SprayBrush(canvas, {
  width: 50,
  opacity: 0.5,
  color: "#ffffff"
});

// function drawOnCanvas(json) {
//   canvas2.loadFromJSON(json);
// }

//while brush size is changed
document.getElementById("size").oninput = function () {
  var size = this.value;
  mousecursor
    .center()
    .set({
      radius: size/2
    })
    .setCoords()
    .canvas.renderAll();
};

//after brush size has been changed
document.getElementById("size").onchange = function () {
  var size = parseInt(this.value, 10);
  canvas.freeDrawingBrush.width = size;
  mousecursor
    .set({
      left: mousecursor.originalState.left,
      top: mousecursor.originalState.top,
      radius: size/2
    })
    .setCoords()
    .canvas.renderAll();
};


//change drawing color
document.getElementById("color").onchange = function () {
  canvas.freeDrawingBrush.color = this.value;  
  var bigint = parseInt(this.value.replace("#", ""), 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;  
  mousecursor.fill = "rgba(" + [r,g,b].join(",") + ")";
};

//switch drawing mode
document.getElementById("mode").onchange = function () {
  canvas.isDrawingMode = this.checked;
  
  if (!this.checked) {
    cursor.remove(mousecursor);
  }
  else {
    canvas.deactivateAll().renderAll();
    cursor.add(mousecursor);
  }
};

//clear
function clearCanvas() {
  canvas.clear();
}

//eraser
function startErase() {
  canvas.isDrawingMode = false;
  canvas.isDrawingMode = true;
  
  canvas.freeDrawingBrush.globalCompositeOperation = "destination-out";
  canvas.renderAll();
}

//download

//eraser
