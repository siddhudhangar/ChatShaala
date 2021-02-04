 // <script>
// Get the root element
var r = document.querySelector(':root');
var theme_color = document.getElementById("theme_color");
var active_tab_color_of_dropdown_menus = document.getElementById("active_tab_color_of_dropdown_menus");
var hover_tab_color_of_dropdown_menus = document.getElementById("hover_tab_color_of_dropdown_menus");
// console.log(theme_color);
r.style.setProperty('--mainColor', theme_color.value);
r.style.setProperty('--activeTabsColor', active_tab_color_of_dropdown_menus.value);
r.style.setProperty('--tabsHoverColor', hover_tab_color_of_dropdown_menus.value);

// </script> 