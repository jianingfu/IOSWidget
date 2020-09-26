if (config.runsInWidget) {
  let widget = createWidget()
  Script.setWidget(widget)
  Script.complete()
} 

function createWidget() {
  let today = new Date()
  let start = new Date("08/17/2020")
  let diffTime = Math.abs(start - today);
  let diffWeeks = Math.ceil((diffTime+1)/ (1000 * 60 * 60 * 7* 24));
  let msg = "weeks since school started"
  let w = new ListWidget()
//   w.backgroundColor = new Color("#b00a0f")
  let bg = new LinearGradient()
  bg.colors = [new Color("#ffb3e1"), new Color("37c2de")]
  bg.locations = [0, 1]
  w.backgroundGradient = bg
  let titleTxt = w.addText(diffWeeks.toString())
  titleTxt.font = Font.lightRoundedSystemFont(70)
  titleTxt.centerAlignText()
  titleTxt.textColor = Color.white()
  let msgTxt = w.addText(msg)
  msgTxt.centerAlignText()
  msgTxt.textColor = Color.white()
  msgTxt.textOpacity = 0.8
  return w
}
