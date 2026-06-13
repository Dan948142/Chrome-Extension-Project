const AZ_problem_Key = "AZ_PROBLEM_KEY";
const BookmarkSection = document.getElementById("bookmarks");

const assestURLMap = {
    "play" : chrome.runtime.getURL("assets/play.png"),
    "delete" : chrome.runtime.getURL("assets/delete.png"),
}

document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.sync.get([AZ_problem_Key], (data) => {
        const currentBookmark = data[AZ_problem_Key] || [];
        viewBookmarks(currentBookmark); 
    });
});

function viewBookmarks(bookmarks){
    BookmarkSection.innerHTML = "";
    if(bookmarks.length == 0) {
        BookmarkSection.innerHTML = "<i>No Bookmarks to Show</i>";
        return;
    }

    bookmarks.forEach(bookmark => addNewBookmark(bookmark));
}

function addNewBookmark(bookmark){
    const newBookmark = document.createElement('div');
    const bookmarkTitle = document.createElement('div');
    const bookmarkControls = document.createElement('div');

    bookmarkTitle.textContent = bookmark.name;
    bookmarkTitle.classList.add("bookmark-title");

    setControlAtrrbute(assestURLMap["play"], onPlay, bookmarkControls);
    setControlAtrrbute(assestURLMap["delete"], onDelete, bookmarkControls);

    bookmarkControls.classList.add("bookmark-controls");

    newBookmark.classList.add("bookmark");

    newBookmark.append(bookmarkTitle);
    newBookmark.append(bookmarkControls);

    newBookmark.setAttribute("url", bookmark.url);
    newBookmark.setAttribute("bookmark-id", bookmark.id);

    BookmarkSection.appendChild(newBookmark);
}

function setControlAtrrbute(src, handler, parentDiv){
    const controlElement = document.createElement("img");
    controlElement.src = src;
    controlElement.addEventListener("click", handler);
    parentDiv.appendChild(controlElement);
}


function onPlay(event){
    const problemurl = event.target.parentNode.parentNode.getAttribute("url");
    window.open(problemurl, "_blank");
}

function onDelete(event){
    const bookmarkItem = event.target.parentNode.parentNode;
    const iDtoRemove = bookmarkItem.getAttribute("bookmark-id");

    bookmarkItem.remove();

    deleteitemFromStorage(iDtoRemove);
}

function deleteitemFromStorage(iDtoRemove){
    chrome.storage.sync.get([AZ_problem_Key], (data) =>{
        const currentBookmarks = data[AZ_problem_Key] || [];
        const updatedBookmarks = currentBookmarks.filter((bookmark) => bookmark.id != iDtoRemove);
        chrome.storage.sync.set({[AZ_problem_Key] : updatedBookmarks});
    });
}