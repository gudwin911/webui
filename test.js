var result = 0;


var button = document.getElementById("button");
var questionsQuantity = document.getElementsByClassName("question").length;
var q1 = document.getElementsByName("link");
var q2 = document.getElementsByName("list");
var q3 = document.getElementsByName("browser");
var q4 = document.getElementsByName("table");
var q5 = document.getElementsByName("form");
button.onclick = function() {
    
    if (q1[0].checked) {
        result += 1;
    }
    if (q2[2].checked) {
        result += 1;
    }
    if (q3[3].checked) {
        result += 1;
    }
    if (q4[1].checked && q4[2].checked && !q4[0].checked && !q4[3].checked) {
        result += 1;
    }
    if (q5[0].checked && q5[1].checked && !q5[2].checked && !q5[3].checked) {
        result += 1;
    }
    alert("Правильных ответов: " + result + "\n" +
        "Процент правильных ответов - " + (result/questionsQuantity*100+"%"));
    result = 0;
}
