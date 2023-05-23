# Esercizi TypeScript: Manipolazione di Tipi e Interfacce

Il seguente documento contiene una serie di esercizi avanzati su TypeScript incentrati sulla manipolazione dei tipi. Utilizzeremo operatori built-in di TypeScript come `Omit`, `Partial`, `Required`, `Readonly` e il tipo `Nullable`.

## Esercizio 1: Pilota

**Obiettivo:** Usa `Omit` e `Partial` per manipolare l'interfaccia `Driver`.

```typescript
interface Driver {
  id: string;
  firstName: string;
  lastName: string;
  team: string;
  championshipsWon: number;
}
```
**Compito:** Creare un tipo `DriverFormFields` che rappresenta i campi di un form per creare o modificare un pilota. Questo tipo dovrebbe includere tutte le proprietà dell'interfaccia `Driver`, tranne `id`, e tutte le proprietà dovrebbero essere facoltative.

## Esercizio 2: Automobile

**Obiettivo:** Usa `Readonly` e `Nullable` per manipolare l'interfaccia `Car`.

```typescript
interface Car {
  id: string;
  model: string;
  horsepower: number;
  team: string;
  driver: string;
}
```

**Compito:** Creare un tipo `ImmutableCar` in cui tutte le proprietà di `Car` sono in sola lettura. Inoltre, il campo `driver` dovrebbe essere nullable, per rappresentare il fatto che una macchina potrebbe non avere un pilota assegnato.

## Esercizio 3: Team di Formula 1

**Obiettivo:** Usa `Required`, `Omit` e `Partial` per manipolare l'interfaccia `Team`.

```typescript
interface Team {
  id?: string;
  name: string;
  foundingYear: number;
  headquarters: string;
  championshipsWon: number;
}
```

**Compito:** Creare un tipo `TeamFormFields` che rappresenta i campi di un form per creare o modificare una squadra. Questo tipo dovrebbe includere tutte le proprietà dell'interfaccia `Team`, tranne `id`, e tutte le proprietà dovrebbero essere obbligatorie.
