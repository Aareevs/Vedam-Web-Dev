const input = document.getElementById("note-input")
const createBtn = document.getElementById("create-btn")
const list = document.getElementById("notes-list")
const emojiBtn = document.getElementById("emoji-btn")
const emojiPicker = document.getElementById("emoji-picker")

function setButtonState() {
  createBtn.disabled = !input.value.trim().length
}

input.addEventListener("input", setButtonState)

emojiBtn.addEventListener("click", () => {
  emojiPicker.classList.toggle("hidden")
  input.focus()
})

emojiPicker.addEventListener("emoji-click", (event) => {
  const emoji = event.detail.unicode
  const start = input.selectionStart || 0
  const end = input.selectionEnd || 0
  const val = input.value
  input.value = val.slice(0, start) + emoji + val.slice(end)
  const caret = start + emoji.length
  input.setSelectionRange(caret, caret)
  setButtonState()
})

document.addEventListener("click", (e) => {
  if (!emojiPicker.classList.contains("hidden") && !emojiPicker.contains(e.target) && e.target !== emojiBtn) {
    emojiPicker.classList.add("hidden")
  }
})

function renderNote(text) {
  const note = document.createElement("div")
  note.className = "note"
  const meta = document.createElement("div")
  meta.className = "note-meta"
  const dt = new Date()
  meta.textContent = dt.toLocaleString()
  const head = document.createElement("div")
  head.className = "note-head"
  const del = document.createElement("button")
  del.className = "delete-btn"
  del.textContent = "Delete"
  del.addEventListener("click", () => note.remove())
  head.appendChild(meta)
  head.appendChild(del)
  const body = document.createElement("div")
  body.className = "note-text"
  body.textContent = text
  note.appendChild(head)
  note.appendChild(body)
  list.prepend(note)
}

createBtn.addEventListener("click", () => {
  const text = input.value.trim()
  if (!text) return
  renderNote(text)
  input.value = ""
  setButtonState()
})

input.addEventListener("keydown", e => {
  if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
    createBtn.click()
  }
})