// Function to create and insert the card element
function createCard(thumbnail, heading, views, monthsOld, duration, video, cName = "CodeWithHarry") {
    // Create the main card div
    var cardDiv = document.createElement("div");
    cardDiv.className = "card";

    // Create and append the image element
    var imgElement = document.createElement("img");
    imgElement.src = thumbnail;
    imgElement.alt = "thumbnail";
    imgElement.className = "thumbnail";
    cardDiv.appendChild(imgElement);

    // Create the data div
    var dataDiv = document.createElement("div");
    dataDiv.className = "data";

    // Create and append the heading element
    var headingElement = document.createElement("h1");
    headingElement.textContent = heading;
    dataDiv.appendChild(headingElement);

    // Create the info div
    var infoDiv = document.createElement("div");
    infoDiv.className = "info";

    // Create and append the span elements within the info div
    var cNameSpan = document.createElement("span");
    cNameSpan.className = "cName";
    cNameSpan.textContent = cName;
    infoDiv.appendChild(cNameSpan);

    var dot = document.createElement("span");
    dot.className = "dot1";
    dot.textContent = "."
    infoDiv.appendChild(dot);

    var viewsSpan = document.createElement("span");
    viewsSpan.className = "views";

    // Function to convert the number to the abbreviations named viewsabbr
    function viewsabbr(views) {
        const abbreviations = ['', 'K', 'M', 'B', 'T'];

        // Determine the appropriate abbreviation index
        const abbreviationIndex = Math.floor(Math.log10(Math.abs(views)) / 3);

        // Calculate the abbreviated number
        const abbreviatedNumber = (views / Math.pow(10, abbreviationIndex * 3)).toFixed(1);

        // Combine the abbreviated number with the abbreviation
        return abbreviatedNumber + abbreviations[abbreviationIndex];
    }

    // Calling the function viewsabbr
    viewsSpan.textContent = viewsabbr(views);
    infoDiv.appendChild(viewsSpan);
    
    var dot = document.createElement("span");
    dot.className = "dot2";
    dot.textContent = "."
    infoDiv.appendChild(dot);

    var monthsOldSpan = document.createElement("span");
    monthsOldSpan.className = "monthsOld";
    monthsOldSpan.textContent = monthsOld;
    infoDiv.appendChild(monthsOldSpan);

    var durationSpan = document.createElement("span");
    durationSpan.className = "duration";
    durationSpan.textContent = duration;
    infoDiv.appendChild(durationSpan);

    // Append the info div to the data div
    dataDiv.appendChild(infoDiv);

    // Append the data div to the main card div
    cardDiv.appendChild(dataDiv);

    var containerDiv = document.createElement("div")
    containerDiv.className = "container"
    containerDiv.appendChild(cardDiv)

    var ahref = document.createElement("a")
    ahref.href = video;
    ahref.className = "video"
    ahref.appendChild(containerDiv)

    // Append the card div to the body of the document
    document.body.appendChild(ahref);
}

// Call the function to create and insert the card
createCard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw", "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "1", "10 months old", "31:20", "https://youtu.be/tVzUXW6siu0?si=V6Wtp6quirldY9fB");
createCard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw", "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "10", "10 months old", "31:20", "https://youtu.be/tVzUXW6siu0?si=V6Wtp6quirldY9fB");
createCard("https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU_sVj4Cw273EE2dnVxk_GeeDocQ", "Your First HTML Website | Sigma Web Development Course - Tutorial #2", "100", "9 months old", "28:31", "https://youtu.be/kJEsTjH5mVg?si=cii4tVXkfyJpMqIF");
createCard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw", "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "1000", "10 months old", "31:20", "https://youtu.be/tVzUXW6siu0?si=V6Wtp6quirldY9fB");
createCard("https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU_sVj4Cw273EE2dnVxk_GeeDocQ", "Your First HTML Website | Sigma Web Development Course - Tutorial #2", "10000", "9 months old", "28:31", "https://youtu.be/kJEsTjH5mVg?si=cii4tVXkfyJpMqIF");
createCard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw", "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "100000", "10 months old", "31:20", "https://youtu.be/tVzUXW6siu0?si=V6Wtp6quirldY9fB");
createCard("https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU_sVj4Cw273EE2dnVxk_GeeDocQ", "Your First HTML Website | Sigma Web Development Course - Tutorial #2", "1000000", "9 months old", "28:31", "https://youtu.be/kJEsTjH5mVg?si=cii4tVXkfyJpMqIF");
createCard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw", "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "100000", "10 months old", "31:20", "https://youtu.be/tVzUXW6siu0?si=V6Wtp6quirldY9fB");

// let dot2 = document.getElementsByClassName("dot2")
// if(views<10){
//     dot2.style.left = "140px"
// }else if(views < 100){
//     dot2.style.left = "147px"
// }
// else if(views<1000){
//     dot2.style.left = "155px"
// }
// else if(views<10000){
//     dot2.style.left = "148px"
// }
// else if(views<100000){
//     dot2.style.left = "156px"
// }
// else if(views<1000000){
//     dot2.style.left = "165px"
// }
// else{
//     dot2.style.left = "152px"
// }