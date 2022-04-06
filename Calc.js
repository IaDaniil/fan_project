function quad(a, b, c) {
  if (a === 0) return "false";
  var D = b * b - 4 * a * c;
  var x1, x2;
  if (D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    return (
      "Корни уравнения: X1=" + x1 + "\n X2=" + x2 + "\nДискриминант(D)=" + D
    );
  } else if (D === 0) {
    x1 = -b / (2 * a);
    return "Корни уравнения: X1=" + x1 + "\nДискриминант(D)=" + D;
  } else if (D < 0) {
    return "Корней нет\nДискриминант(D)=" + D;
  }
}
function prog() {
  var a = Document.getElementById("a").value;
  var b = Document.getElementById("b").value;
  var c = Document.getElementById("c").value;
  var result = quad(a, b, c);
  document.getElementById("result").textContent = result;
  document.getElementById("otvet").style.display = "block";
}
