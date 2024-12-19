import { decodeAddress } from "@traittech/trait-keyless";

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const address = document.getElementById("address").value;

  const decodedAddress = decodeAddress(address);

  document.getElementById("output").textContent = JSON.stringify(
    decodedAddress,
    null,
    2
  );

  document.getElementById("outputContainer").style.display = "block";
});
