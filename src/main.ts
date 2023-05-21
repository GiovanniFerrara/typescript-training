import './math.namespace'

import MathModule from './math.module';
import { sum } from './math.module';

const rootElement: HTMLElement | null = document.getElementById("root");

if(!rootElement) {
  throw new Error("root element not found.");
}

console.log(window.MyMath.sum(1, 2));

console.log(MathModule.sum(1, 2));


rootElement.innerHTML = `
  <p>MyMath.sum(1, 2) = ${window.MyMath.sum(1, 2)}</p>
  <p>MathModule.sum(1, 2) = ${MathModule.sum(1, 2)}</p>
  <p>sum(1, 2) = ${sum(1, 2)}</p>
`;
