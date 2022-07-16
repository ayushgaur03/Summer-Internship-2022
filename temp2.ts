type enum1 = {
  name: string;
  description: string;
  done: boolean;
};

var todos: enum1[] = [];

function add(name: string, description: string): number {
  return todos.push({
    name: name,
    description: description,
    done: false,
  });
}

function remove(index: number): enum1[] {
  return todos.splice(index, 1);
}
function list(): void {
  todos.forEach(function (todo: enum1, index: number) {
    console.log(index + " - " + todo.name);
  });
}
function update(index: number, name: string, description: string): enum1 {
  todos[index].name = name;
  todos[index].description = description;
  return todos[index];
}
console.log(add("Go to College", "Do some Assignments")); // 1
list(); // 0 - Go to College
