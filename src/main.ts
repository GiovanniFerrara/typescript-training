import * as yup from "yup";

const rootElement: HTMLElement | null = document.getElementById("root");

if (!rootElement) {
  throw new Error("root element not found.");
}

function validateUser(name: string, age: number) {
  // cliccando su yup.object().shape si apre la definizione di yup
  // cliccando su yup.string().required() si apre la definizione di yup.string
  const schema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required().positive().integer(),
  });

  return schema
    .validate({
      name,
      age,
    })
}

const form = document.querySelector("form") as HTMLFormElement;
const name = document.querySelector("#username") as HTMLInputElement;
const age = document.querySelector("#age") as HTMLInputElement;
const resultMessage = document.querySelector(
  "#resul-message"
) as HTMLParagraphElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameValue = name.value;
  const ageValue = parseInt(age.value);

    validateUser(nameValue, ageValue).then(() => {
      resultMessage.innerText = "Success";
    }).catch(() => {
    resultMessage.innerText = "validation failed";
    });
});
