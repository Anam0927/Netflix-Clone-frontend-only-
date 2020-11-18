// : tab header elements
const tabHeaders = document.querySelectorAll(".tabs .container > div");

// : tab content items
const tabItems = document.querySelectorAll(".tab-content .container > div");

// : functions

// -- function to change active tab
const changeTabActive = (tabElement) => {
    if (tabElement.classList.contains("tabs--active")) {
        return;
    } else {
        for (const tHeader of tabHeaders) {
            if (tHeader.classList.contains("tabs--active")) {
                tHeader.classList.remove("tabs--active");
            }
        }
        tabElement.classList.add("tabs--active");
    }
}

// -- function to change active content
const changeActiveContent = (contentElement) => {
    if (!contentElement.classList.contains("no-show")) {
        return;
    } else {
        for (const tContent of tabItems) {
            if (!tContent.classList.contains("no-show")) {
                tContent.classList.add("no-show");
            }
        }
        contentElement.classList.remove("no-show");
    }
}

// -- function to change content shown based on active tab
const changeTabContent = (elementHeader) => {

    // change active tab
    changeTabActive(elementHeader);

    // change content shown
    let element, index;

    for (let i = 0; i < tabHeaders.length; i++) {
        element = tabHeaders.item(i);
        if (element === elementHeader) {
            index = i;
            break;
        }
    }

    element = tabItems[index];

    changeActiveContent(element);
}

// : adding event listener to each tab Header
for (const tHeader of tabHeaders) {
    tHeader.addEventListener("click", (e) => {
        changeTabContent(tHeader);
    });
}