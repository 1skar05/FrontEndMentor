const markAll = document.getElementsByClassName("header__right-col")[0];
const notifyCount = document.getElementsByClassName("header__count")[0];

markAll.addEventListener("click", (e) => {
  e.preventDefault();
  markAllAsRead();
  updateUnreadCount();
});
// Update unread notifications count
function updateUnreadCount() {
  const unreadNotifications = document.querySelectorAll(
    ".notification.unread"
  ).length;
  notifyCount.textContent = unreadNotifications;
}

// Mark all notifications as read
function markAllAsRead() {
  // Code to mark all notifications as read goes here
  let notifications = document.querySelectorAll(".unread");

  for (let i = 0; i < notifications.length; i++) {
    notifications[i].classList.remove("unread");
  }
}

// Check if a link has been visited
function checkVisitedLink(link) {
  // Code to check if the link has been visited goes here
  var visited = window
    .getComputedStyle(link, ":visited")
    .getPropertyValue("color");
  var notVisited = window
    .getComputedStyle(link, ":link")
    .getPropertyValue("color");

  // If the color when the link is visited is not the same as when the link is not visited, the link has been visited
  return visited !== notVisited;
}
