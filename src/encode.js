import { encodeAppAgent } from "@traittech/trait-keyless";

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const appAgentId = document.getElementById("appagentid").value;

  const encodedAddress = encodeAppAgent(appAgentId);

  document.getElementById("output").textContent = encodedAddress;
  document.getElementById("outputContainer").style.display = "block";
});
