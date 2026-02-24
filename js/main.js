const inputs = document.querySelectorAll(".input");

const getFreeTrialForm = document.querySelector(".get-free-trial-form");

getFreeTrialForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let emptyAreas = Array.from(inputs).filter((element) => {
    return element.value === "";
  });
  if (emptyAreas.length === 0) {
    if (event.target.querySelector(".error") !== null) {
    } else {
      alert("Your form has been submitted successfully.");
      inputs.forEach((element) => {
        element.value = "";
      });
    }
  }
  console.log(emptyAreas);
});

function message(event) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let isEmailCorrect = emailRegex.test(event.target.value);

  if (!isEmailCorrect) {
    addErrorMessage(event, false);
  } else if (isEmailCorrect) {
    deleteErrorMessage(event);
  }
}

function addErrorMessage(clickedArea, emptyOrNot) {
  const inputName = clickedArea.target.placeholder;
  const inputArea = clickedArea.target.closest(".input-area");
  const errorIcon = clickedArea.target
    .closest(".input-area")
    .querySelector(".error-icon");
  const errorMessage = clickedArea.target
    .closest(".input-box")
    .querySelector(".error-message");

  inputArea.classList.add("error");
  errorIcon.classList.add("error");
  errorMessage.classList.add("error");
  if (emptyOrNot) {
    errorMessage.textContent = `${inputName} cannot be empty`;
  } else if (!emptyOrNot) {
    errorMessage.textContent = `Looks like this is not an email`;
  }
}
function deleteErrorMessage(clickedArea) {
  const inputArea = clickedArea.target.closest(".input-area");
  const errorIcon = clickedArea.target
    .closest(".input-area")
    .querySelector(".error-icon");
  const errorMessage = clickedArea.target
    .closest(".input-box")
    .querySelector(".error-message");

  inputArea.classList.remove("error");
  errorIcon.classList.remove("error");
  errorMessage.classList.remove("error");
}

inputs.forEach((element) => {
  element.addEventListener("blur", (event) => {
    if (event.target.value === "") {
      addErrorMessage(event, true);
    } else if (event.target.value !== "") {
      if (event.target.id === "user-email") {
        message(event);
      } else {
        deleteErrorMessage(event);
      }
    }
  });
});
