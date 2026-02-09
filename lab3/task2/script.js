const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Нажатие на кнопку Add
addBtn.addEventListener("click", function () {
  const text = input.value.trim();

  if (text === "") {
    alert("Введите задачу!");
    return;
  }

  // 1. Создаём li
  const li = document.createElement("li");

  // 2. Создаём checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // 3. Создаём span для текста
  const span = document.createElement("span");
  span.textContent = text;

  // 4. Кнопка удалить
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";

  // 5. Добавляем всё в li
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // 6. Добавляем li в список
  taskList.appendChild(li);
  input.value = "";
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      span.classList.add("done");
    } else {
      span.classList.remove("done");
    }
  });

 
  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(li);
  });
});
