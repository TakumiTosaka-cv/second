const columnWidth = 150
const rowHeight = 100
const fontSize = 36

function drawTemplate(labels) {
  const widgets = []
  const rowLabel = labels;
      widgets.push(rowLabel)
  miro.board.widgets.create(widgets)
}

function getRowLabel(text) {
  return {
    type: 'text',
    x: -(columnWidth / 2 + fontSize),
    text: text,
    width: columnWidth,
    height: fontSize,
    rotation: 270,
    style: {
      fontSize: fontSize,
      textAlign: 'c'
    }
  }
}
