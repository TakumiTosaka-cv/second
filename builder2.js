const columnWidth = 250
const rowHeight = 100
const fontSize = 300

var img = document.getElementById("baunsu.png");


function drawTemplate(labels) {
  const widgets = []
  //for (let rowIdx = 0; rowIdx < labels.length; rowIdx++) {
    //const rowY = rowIdx * rowHeight + (10 * rowIdx);
    //const rowLabel = labels[rowIdx];
    //if(rowLabel) {
      //widgets.push(getRowLabel(rowLabel, rowY))
     //}
    //}
  widgets.push(labels);
  miro.board.widgets.create(widgets)
  miro.board.widgets.create(img)
}



function getRowLabel(text, y) {
  return {
    type: 'text',
    x: -(columnWidth / 2 + fontSize),
    y: y,
    text: text,
    width: columnWidth,
    height: fontSize,
    //rotation: 360,
    style: {
      fontSize: fontSize,
      textAlign: 'c'
    }
  }
}
