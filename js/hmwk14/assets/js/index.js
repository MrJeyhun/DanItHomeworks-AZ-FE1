$(function() {
  //access all tabs
  const tabs = $(".tabs");
  //access all contents
  const contents = $(".contents");
  //hide all contents
  $(contents).hide();
  //display first content of active tab (tab which has active class)
  $(contents[0]).show();
  //set event handler for every tabs
  tabs.click(e => {
    //remove active class from previous and set it to clicked tab
    $(".active").removeClass("active");
    $(e.target).addClass("active");
    //hide content of previous tab
    $(contents).hide();
    //display content of clicked tab
    $(contents[$(e.target).index()]).css("display", "block");
  });
});
