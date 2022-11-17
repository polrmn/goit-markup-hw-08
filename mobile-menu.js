(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]")
  const mobileMenuRef = document.querySelector("[data-menu]")
  const bodyMenuRef = document.querySelector ("[data-menu-body]");
  menuBtnRef.addEventListener('click', () => {
    const expanded =
    menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expended", !expanded);

    mobileMenuRef.classList.toggle("is-open");

    bodyMenuRef.classList.toggle("is-open");

  })
})();