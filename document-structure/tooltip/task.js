let hasTooltip = document.querySelectorAll(".has-tooltip");
tooltip = document.createElement("div");
tooltip.className = "tooltip";

hasTooltip.forEach((el) => {
  let coords = el.getBoundingClientRect();
  let left = coords.left;
  let top = coords.top - tooltip.offsetHeight + 20;
  el.addEventListener("click", stopDefAction, false);

  function stopDefAction(evt) {
    if (tooltip.innerHTML != el.title) {
      tooltip.innerHTML = el.title;
      tooltip.classList.add("tooltip_active");
    } else {
      tooltip.classList.remove("tooltip_active");
      tooltip.innerHTML = "";
    }

    evt.preventDefault();
    el.insertAdjacentElement("beforebegin", tooltip);
    tooltip.style.left = left + "px";
    tooltip.style.top = top + "px";
    return tooltip;
  }
});
