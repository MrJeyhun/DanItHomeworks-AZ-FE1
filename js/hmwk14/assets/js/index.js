$(function() {
  //access all tabs
  const tabs = $(".tabs-list");
  //access all contents
  const content = $(".contents");
  //hide all contents
  $(content).hide();
  //display first content of active tab (tab which has active class)
  $(content[0]).show();
  //set event handler for every tabs
  tabs.on("click", ".tabs", function() {
    //remove active class from previous and set it to clicked tab
    $(".active").removeClass("active");
    $(this).addClass("active");
    //hide content of previous tab
    $(content).hide();
    //display content of clicked tab
    $(content[$(this).index()]).css("display", "block");
  });
});
