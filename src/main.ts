const rootElement: HTMLElement | null = document.getElementById("root");

if(!rootElement) {
  throw new Error("root element not found.");
}


rootElement.innerHTML = ``;
