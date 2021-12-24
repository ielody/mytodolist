module.exports = async function($) {
  $.page.title = 'My todo list'

  return /* html */`

    <div class="container">
      <div id="newtask">
        <input type="text" placeholder="+  Add a new task...">
        <button id="add">Add</button>
      </div>
      <div id="tasks">
      </div>
    </div>

    <script>
document.querySelector('#add').onclick = function () {
    if(this.querySelector('#newtask input').value.length == 0) {
      alert("Please enter a task")
    }


  else {
      document.querySelector('#tasks').innerHTML +=
      <div class="task">
        <span id="taskname">
          ${document.querySelector('#newtask input').value}
        </span>
    </div>

    </script>

    `
}
