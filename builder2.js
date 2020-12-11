const columnWidth = 250
const rowHeight = 100
const fontSize = 300

function drawTemplate(labels) {
  const widgets = []
  for (let rowIdx = 0; rowIdx < labels.length; rowIdx++) {
    const rowY = rowIdx * rowHeight + (10 * rowIdx);
    const rowLabel = labels[rowIdx];
    if(rowLabel) {
      widgets.push(getRowLabel(rowLabel, rowY))
     }
    }
  miro.board.widgets.create(widgets)
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
