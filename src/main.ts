import { fetchData } from "./utils";

const rootElement: HTMLElement | null = document.getElementById("root");

if(!rootElement) {
  throw new Error("root element not found.");
}

// per il secondo esercizio
// usa fetchData per ottenere i dati come se usassi fetch direttamente
async function fetchPosts(){
// implementa la funzione
}

async function runAll () {
  const posts = await fetchPosts()

  console.log(posts);
}


runAll();

rootElement.innerHTML = ``;
