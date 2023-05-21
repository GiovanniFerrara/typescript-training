# Moduli e Namespaces in TypeScript

In questo documento, esploreremo come i moduli e i namespaces possono essere utilizzati in TypeScript per organizzare il codice e prevenire conflitti di nomi.

## Namespaces

Un namespace è un modo per raggruppare codice correlato. In TypeScript, i namespaces possono essere utili per evitare collisioni di nomi, specialmente quando si sviluppano applicazioni con vanilla TypeScript. Ecco un esempio di come si può creare un namespace:

```typescript
// src/math.namespace.ts

namespace MyMath {
  export function sum(x: number, y: number): number {
      return x + y;
  }

  export function subtract(x: number, y: number): number {
      return x - y;
  }
}

window.MyMath = MyMath;
```

In questo esempio, abbiamo creato un namespace chiamato `MyMath` che contiene due funzioni, `sum` e `subtract`. Abbiamo poi assegnato `MyMath` all'oggetto globale `window`, rendendolo disponibile globalmente.

## Moduli

Un modulo è un file che contiene codice TypeScript e che può essere importato in altri file. I moduli sono un altro modo per organizzare il codice e prevenire conflitti di nomi. Ecco un esempio di un modulo:

```typescript
// src/math.module.ts

export function sum(x: number, y: number): number {
  return x + y;
}

export function subtract(x: number, y: number): number {
  return x - y;
}

const MathModule = {
  sum,
  subtract
};

export default MathModule;
```

In questo esempio, abbiamo esportato due funzioni, `sum` e `subtract`, e un oggetto `MathModule` che le contiene entrambe. Nota l'uso dell'istruzione `export default` per esportare `MathModule`. Questo significa che quando importiamo `math.module.ts` in un altro file, `MathModule` sarà l'importazione predefinita.

## Uso di Moduli e Namespaces

Una volta definiti i moduli e i namespaces, possiamo utilizzarli in altri file:

```typescript
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
```

In questo esempio, importiamo sia il namespace `MyMath` che il modulo `MathModule`, e li utilizziamo per chiamare la funzione `sum`. Nota come il namespace `MyMath` è disponibile come proprietà dell'oggetto `window`, mentre `MathModule` è importato come un modulo.
