function HelloWorld() {
  const data = ["hello", "world"];
  const dataCapitalized = data.map((word) => {
    word = word.split("");
    word[0] = word[0].toUpperCase();
    return word.join("");
  });

  const dataStr = dataCapitalized.join(" ");
  return <p>{dataStr}</p>;
}

export default HelloWorld;
