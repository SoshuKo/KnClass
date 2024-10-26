function applyClassSTransform(word, classNum) {
  const consonant1 = word.match(/^[a-z]+/i)?.[0]?.[0]?.toLowerCase();
  const sPrefixMap = { "4": "sa", "5": "se", "6": "si" };

  if (["b", "bl", "bm", "br", "d", "dl", "dn", "dr", "dz", "dzl", "f", "fl", "fr", "g", "gh", "gl", "gn", "gr", "j", "jr", "r", "s", "v", "z", "zh", "zhr", "zl"].includes(consonant1)) {
    return sPrefixMap[classNum] + word;
  } else if (consonant1 === "q") {
    return word.replace(/^q/, "s’");
  } else if (consonant1 === "x") {
    return word.replace(/^x/, "sh’");
  } else {
    return "s" + word;
  }
}

function convert() {
  let root = document.getElementById("root").value;
  const classNum = document.getElementById("class").value;
  let result = root;

  if (classNum === "2") result = root.replace(/a/g, "e");
  else if (classNum === "3") result = root.replace(/ai/g, "úi").replace(/au/g, "íu").replace(/ia/g, "iú").replace(/ua/g, "uí").replace(/a/g, "i");
  else if (classNum === "5") result = applyClassSTransform(root.replace(/a/g, "e"), classNum);
  else if (classNum === "6") result = applyClassSTransform(root.replace(/ai/g, "úi").replace(/au/g, "íu").replace(/ia/g, "iú").replace(/ua/g, "uí").replace(/a/g, "i"), classNum);
  else if (classNum === "4") result = applyClassSTransform(root, classNum);

  document.getElementById("result").innerText = `結果: ${result}`;
}
