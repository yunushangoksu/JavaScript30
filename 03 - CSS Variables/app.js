function handleChange() {
  let spacingValue = document.getElementById("spacing");
  let blurValue = document.getElementById("blur");
  let baseColor = document.getElementById("base");

  document.documentElement.style.setProperty(
    "--spacing",
    `${spacingValue.value}px`
  );
  document.documentElement.style.setProperty("--blur", `${blurValue.value}px`);
  document.documentElement.style.setProperty("--basecolor", baseColor.value);
  console.log(blurValue.value);
}

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => input.addEventListener("change", handleChange));
inputs.forEach((input) => input.addEventListener("mousemove", handleChange));
