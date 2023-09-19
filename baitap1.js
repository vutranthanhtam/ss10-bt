let weight = prompt("nhập cân nặng'kg'")
let height = prompt("nhập chiều cao'm'")
bmi = weight/( height^2 )
if (bmi < 18.5) {
    alert("Gầy")
 } else if (bmi < 25.0) {
    alert("Bình thường")
 } else {
    alert("Thừa cân")
 }