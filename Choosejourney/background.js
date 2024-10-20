let sidebarVisible = false;
chrome.action.onClicked.addListener(function (tab) {
  if (!sidebarVisible) {
    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }, () => {
      chrome.sidePanel.setOptions({
        path: "sidebar.html",
        enabled: true
      }, () => {
        sidebarVisible = true;
        console.log("Sidebar is now visible.");
      });
    });
  } else {
    chrome.sidePanel.setOptions({
      enabled: false
    }, () => {
      sidebarVisible = false;
      console.log("Sidebar is now hidden.");
    });
  }
});
