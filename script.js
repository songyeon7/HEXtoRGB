function convertHexToRgb() {
  var hexInput = document.getElementById("hexInput").value;
  var result = document.getElementById("result");

  // Hex 값에서 '#' 제거
  var hex = hexInput.replace("#", "");

  // 유효한 Hex 값인지 확인
  if (!/^([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    result.innerHTML = "Invalid Hex value!";
    return;
  }

  // 3자리 Hex 값을 6자리로 확장
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map(function (char) {
        return char + char;
      })
      .join("");
  }

  // R, G, B 값을 추출하여 10진수로 변환
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  // 결과 출력
  result.innerHTML = "rgb(" + r + ", " + g + ", " + b + ")";

  // 배경 색상 변경
  var body = document.getElementsByTagName("body")[0];
  body.style.backgroundColor = "#" + hex;

  // 글자 색상 변경
  var container = document.querySelector(".container");
  container.classList.remove("dark");
  if (r + g + b > 382) {
    container.classList.add("dark");
  }
}
