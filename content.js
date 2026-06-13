const bookmarkImageURL = chrome.runtime.getURL("assets/bookmarks.png");
const AZ_problem_Key = "AZ_PROBLEM_KEY";

const checkInterval = setInterval(addBookmarkButton, 500);

const observer = new MutationObserver(()=>{
    addBookmarkButton();
});

observer.observe(document.body, {childList:true, subtree:true});

addBookmarkButton();

function onProblemPage(){
    return (window.location.pathname.startsWith('/problems/'));
}

function addBookmarkButton(){
    console.log("Triggering");
    if(!onProblemPage() || document.getElementById("add-bookmark-button")) return;

    const ask_doubt_button = document.querySelector('button[aria-label="Change problem layout"]');
    
    if (!ask_doubt_button || document.getElementById("add-bookmark-button")) {
        return;
    }

    clearInterval(checkInterval);

    const bookmarkButton = document.createElement('img');
    bookmarkButton.id = "add-bookmark-button";
    bookmarkButton.src = bookmarkImageURL;
    bookmarkButton.style.height = "32px";
    bookmarkButton.style.width = "30px";
    bookmarkButton.style.marginLeft = "10px";
    bookmarkButton.style.marginTop = "3px";
    
    bookmarkButton.style.cursor = "pointer"; 
    bookmarkButton.style.position = "relative";
    bookmarkButton.style.zIndex = "999";

    ask_doubt_button.insertAdjacentElement("afterend", bookmarkButton);

    bookmarkButton.addEventListener("click", addNewBookmarkHandler);
}

async function addNewBookmarkHandler(event){
    console.log("Bookmark image was successfully clicked!");

    event.stopPropagation(); 
    event.preventDefault();
    
    const currentbookmark = await getCurrentBookmark();
    const azproblemURl = window.location.href;
    const uniqueID = extractProblemId(azproblemURl);
    
    const titleElement = document.querySelector('h4.font-rubik.text-xl.font-bold');
    const problemName = titleElement ? titleElement.innerText : "Unknown Problem";

    if(currentbookmark.some((bookmark) => bookmark.id == uniqueID)) {
        alert("This problem is already in your bookmarks!");
        return;
    }

    const bookmarkOBJ = {
        id: uniqueID,
        name: problemName,
        url: azproblemURl
    };

    const updatedBookmark = [...currentbookmark, bookmarkOBJ];
    chrome.storage.sync.set({ [AZ_problem_Key]: updatedBookmark }, () => {
        console.log("Updated the bookmark correctly to ", updatedBookmark);
        alert("Bookmark saved successfully!"); 
    });
}

function extractProblemId(url) {
  const start = url.indexOf('/problems/');
  if (start === -1) return null;

  const idStart = start + '/problems/'.length;
  const end = url.indexOf('?', idStart);

  return end === -1
    ? url.slice(idStart)
    : url.slice(idStart, end);
}

async function getCurrentBookmark() {
    try {
        const results = await chrome.storage.sync.get([AZ_problem_Key]);
        return results[AZ_problem_Key] || [];
    } catch (error) {
        console.error("Storage Access Error:", error);
        return []; 
    }
}