// En este ejercicio deberéis realizar algunos cambios sobre las dos listas incluidas en "index.html".
// En la primera lista tendréis que hacer lo siguiente:
//    * Añadid la clase "element-n" a cada "span" de la lista, siendo "n" el número del lugar que ocupa en la lista (por ejemplo el segundo "span" de la lista tendría la clase "element-2"). Para ello, haced uso de los selectores de nodo (parentNode, nextSibling, firstChild...) partiendo del "span" con la clase "selected" siempre.
//    * Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

//En la segunda lista, que en principio está vacía, deberéis hacer esto:
//    * Tenéis que generar dentro de esta lista, nodo a nodo, la misma estructura que ha quedado en la primera lista en la que realizastéis los cambios. Tiene que quedar igual, con la misma jerarquía y con las mismas clases, pero con la diferencia de que en vez de elementos "span" deben ser botones. Para replicar los elementos de la primera lista no hace falta que la recorráis, podéis simplemente generar cada elemento "a mano" una detrás de otro (aunque si usáis la lista de referencia para hacer algún tipo de bucle, mejor)
//    * Después de generar esta segunda lista, añadid el atributo disabled al último botón.
// Suerte!

window.addEventListener("load", onLoad);

function onLoad() {
  // Ejercicio 1

  let span_3 = document.querySelector(".selected");
  let li_3 = span_3.parentNode;
  let li_2 = li_3.previousSibling.previousSibling;
  let span_2 = li_2.firstChild;
  span_2.classList.add("element-2");
  let li_1 = li_2.previousSibling.previousSibling;
  let span_1 = li_1.firstChild;
  span_1.classList.add("element-1");
  let li_4 = li_3.nextSibling.nextSibling;
  let span_4 = li_4.firstChild;
  span_4.classList.add("element-4");
  let li_5 = li_4.nextSibling.nextSibling;
  let span_5 = li_5.firstChild;
  span_5.classList.add("element-5");

  let elementosLi = document.querySelectorAll("li");
  for (let i = 0; i < elementosLi.length; i++) {
    if (i % 2 === 1) {
      elementosLi[i].remove();
    }
  }

  // Ejercicio 2

  let ul = document.getElementById("list2");
  let li1 = document.createElement("li");
  let button1 = document.createElement("button");
  button1.classList.add("element-1");
  let texto1 = document.createTextNode("texto ejemplo 1");
  button1.appendChild(texto1);
  li1.appendChild(button1);
  ul.appendChild(li1);

  let li2 = document.createElement("li");
  let button2 = document.createElement("button");
  button2.classList.add("selected");
  let texto2 = document.createTextNode("texto ejemplo 3");
  button2.appendChild(texto2);
  li2.appendChild(button2);
  ul.appendChild(li2);

  let li3 = document.createElement("li");
  let button3 = document.createElement("button");
  button3.setAttribute("disabled", false);
  button3.classList.add("element-5");
  let texto3 = document.createTextNode("texto ejemplo 5");
  button3.appendChild(texto3);
  li3.appendChild(button3);
  ul.appendChild(li3);
}
