const importantParagraphs = document.getElementsByClassName("important");
console.log(importantParagraphs);
for (let i = 0; i < importantParagraphs.length; i++) {
    importantParagraphs[i].style.color = "red";
    importantParagraphs[i].style.fontWeight = "bold";
    importantParagraphs[i].style.fontSize = "18px";
}   




 