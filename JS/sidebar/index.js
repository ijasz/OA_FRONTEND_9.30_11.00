const doc = document;

function openSidebar() {
  const sidebar = doc.querySelector(".sidebar");
  if (sidebar.className.includes("sidebar-active")) {
    sidebar.classList.remove("sidebar-active");
  } else {
    sidebar.classList.add("sidebar-active");
  }

  console.log(sidebar);
}

let input = "Prprghprla";
