function volumedanluasbalok(p, l, t) {
  var volumebalok;
  var luasbalok;

  volumebalok = p * l * t;
  luasbalok = 2 * (p * l) + p * t + l * t;

  document.write("p = ", p, "<br>");
  document.write("l = ", l, "<br>");
  document.write("t = ", t, "<br>");
  document.write("volume = p * l * t = ", p * l * t);

  document.write("<br><br><br> p = ", p, "<br>");
  document.write("l = ", l, "<br>");
  document.write("t = ", t, "<br>");
  document.write(
    "luas permukaan balok = 2 * (p * l) + p * t + l * t; = ",
    2 * (p * l) + p * t + l * t
  );
}
volumedanluasbalok(4, 5, 6);
