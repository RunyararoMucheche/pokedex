const container = document.querySelector("#container");
const htmlText =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 1000; i++) {
  const image = document.createElement("img");
  const span = document.createElement("span");
  const pokemon = document.createElement("div");

  image.src = `${htmlText}${i}.png`;
  span.innerText = `#${i}`;
  pokemon.appendChild(image);
  pokemon.appendChild(span);

  pokemon.classList.toggle("pokemon");
  container.appendChild(pokemon);
}
