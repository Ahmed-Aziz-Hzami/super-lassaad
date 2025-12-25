import { soundManager } from "../../SoundManager"
import { displayBlinkingUIMessage } from "../../utils/ui"

export function scene() {
  soundManager.pauseAllSounds()
  add([rect(width(), height()), color(0, 0, 0)])
  add([
    text("Mafamech Salaire!", {
      size: 40,
      font: "Round",
    }),
    area(),
    anchor("center"),
    pos(center()),
  ])
  add([
    text("Nchalah Lmara Ejeya", {
      size: 30,
      font: "Round",
    }),
    area(),
    anchor("center"),
    pos(vec2(center().x, center().y + 50)),
  ])

  displayBlinkingUIMessage(
    "Press [ Enter ] to Start Game",
    vec2(center().x, center().y + 100)
  )

  onKeyPress("enter", () => {
    play("confirm-ui")
    go("1")
  })
}
