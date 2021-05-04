const joblist = [
  {
    "id": 1,
    "company": "Photosnap",
    "logo": "./images/photosnap.svg",
    "new": true,
    "featured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["HTML", "CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 2,
    "company": "Manage",
    "logo": "./images/manage.svg",
    "new": true,
    "featured": true,
    "position": "Fullstack Developer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1d ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["Python"],
    "tools": ["React"]
  },
  {
    "id": 3,
    "company": "Account",
    "logo": "./images/account.svg",
    "new": true,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2d ago",
    "contract": "Part Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  },
  {
    "id": 4,
    "company": "MyHome",
    "logo": "./images/myhome.svg",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "5d ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": ["CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 5,
    "company": "Loop Studios",
    "logo": "./images/loop-studios.svg",
    "new": false,
    "featured": false,
    "position": "Software Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["Ruby", "Sass"]
  },
  {
    "id": 6,
    "company": "FaceIt",
    "logo": "./images/faceit.svg",
    "new": false,
    "featured": false,
    "position": "Junior Backend Developer",
    "role": "Backend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "UK Only",
    "languages": ["Ruby"],
    "tools": ["RoR"]
  },
  {
    "id": 7,
    "company": "Shortly",
    "logo": "./images/shortly.svg",
    "new": false,
    "featured": false,
    "position": "Junior Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["HTML", "JavaScript"],
    "tools": ["Sass"]
  },
  {
    "id": 8,
    "company": "Insure",
    "logo": "./images/insure.svg",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["Vue", "Sass"]
  },
  {
    "id": 9,
    "company": "Eyecam Co.",
    "logo": "./images/eyecam-co.svg",
    "new": false,
    "featured": false,
    "position": "Full Stack Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "3w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript", "Python"],
    "tools": ["Django"]
  },
  {
    "id": 10,
    "company": "The Air Filter Company",
    "logo": "./images/the-air-filter-company.svg",
    "new": false,
    "featured": false,
    "position": "Front-end Dev",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "1mo ago",
    "contract": "Part Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  }
];

// Add items to listing
function addListings() {

  for (var i = 0; i < joblist.length; i++) {
    // Variables
    let listLogo = document.createElement("img");
    let listInfo = document.createElement("div");
    let listCategories = document.createElement("div");

    let listItem = document.createElement("div");

    // Element logo
    listLogo.setAttribute("src", `${joblist[i].logo}`);
    listLogo.setAttribute("alt", `${joblist[i].company}`);

    // Element info
    let newFeatured = "";
    if (joblist[i].new) {
      newFeatured += "<span class='new-heading'><h2>NEW!</h2></span>";
    }
    if (joblist[i].featured) {
      newFeatured += "<span class='featured-heading'><h2>FEATURED</h2></span>";
      listItem.classList += "featured ";
    }

    listInfo.innerHTML = `
    <div class="list-item-info-company">
      <span><h2>${joblist[i].company}</h2></span>
      ${newFeatured}
    </div>
    <div>
      <h1 class='position-heading'>${joblist[i].position}</h1>
    </div>
    <div class="list-item-info-details">
      <h2>${joblist[i].postedAt} • ${joblist[i].contract} • ${joblist[i].location}</h2>
    </div>
    `;

    listInfo.classList += "list-item-info";

    // Element categories
    let languages = "";
    joblist[i].languages.forEach(element => {
      languages += `<span class="${element}" onclick="addFilter(this)"><h2>${element}</h2></span>`
    });

    let tools = "";
    joblist[i].tools.forEach(element => {
      tools += `<span class="${element}" onclick="addFilter(this)"><h2>${element}</h2></span>`
    });

    const role = `<span class="${joblist[i].role}" onclick="addFilter(this)"><h2>${joblist[i].role}</h2></span>`;
    const level = `<span class="${joblist[i].level}" onclick="addFilter(this)"><h2>${joblist[i].level}</h2></span>`;

    listCategories.innerHTML = `
      ${role}${level}${languages}${tools}
    `;

    listCategories.classList += "list-item-categories";

    // Adding sub elements to main item element
    const listItemElements = [listLogo, listInfo, listCategories];

    listItemElements.forEach(element => {
      listItem.appendChild(element);
    });

    // Adding classes
    listItem.classList += `list-item ${joblist[i].role} ${joblist[i].level}`;

    joblist[i].languages.forEach(element => {
      listItem.classList += " " + element;
    });
    joblist[i].tools.forEach(element => {
      listItem.classList += " " + element;
    });

    listItem.setAttribute("id", `${joblist[i].id}`);
    listItem.setAttribute("onLoad", "hoverEffect()");

    document.getElementById("listing-div").append(listItem);
  }
}

// Add category to filter
function addFilter(cat) {

  const filterDiv = document.getElementById("filter-div");

  const filterItem = document.createElement("span");
  filterItem.setAttribute("id", cat.classList[0]);

  filterItem.innerHTML = `<h2>${cat.classList[0]}</h2>
  <img src="./images/icon-remove.svg" alt="remove" onClick="removeFilter(this)">`;

  // If filter list is empty, create and then fill it
  // else add filter category to filter list
  if (document.querySelectorAll(`.list-item-categories #${cat.classList[0]}`).length < 1) {

    if (document.querySelectorAll("#filter-div .list-item-categories").length < 1) {

      filterDiv.style.opacity = "1";
      let categoryList = document.createElement("div");
      categoryList.classList += "list-item-categories";
      filterDiv.appendChild(categoryList);
      categoryList.appendChild(filterItem);

    }
    else {

      const catList = document.querySelector("#filter-div .list-item-categories");
      catList.appendChild(filterItem);

    }
  }
  // Signals the user that the filter category is already applied
  else {

    const appliedFilterCategory = document.querySelector(`.list-item-categories #${cat.classList[0]}`);
    const appliedFilterCategoryH2 = document.querySelector(`.list-item-categories #${cat.classList[0]} h2`);

    appliedFilterCategory.style.background = "var(--primary-cyan)";
    appliedFilterCategoryH2.style.color ="white";

    setTimeout(function() {
      appliedFilterCategory.style.background = "var(--lighter-grey-cyan)";
      appliedFilterCategoryH2.style.color ="var(--primary-cyan)";
    }, 1000);
    
  }

  filtering();

}

// Remove category to filter
function removeFilter(cat) {

  const filterDiv = document.getElementById("filter-div");
  const catDiv = document.querySelectorAll("#filter-div .list-item-categories")[0];

  cat.parentElement.remove();

  if (catDiv.innerHTML == "") {
    catDiv.remove();
  }

  if (filterDiv.innerHTML == "") {
    filterDiv.style.opacity = "0";
  }

  filtering(cat.parentElement.id);

}

// Filtering items
function filtering(cat) {
  const listItems = document.querySelectorAll(".list-item");
  const filters = document.querySelectorAll("#filter-div .list-item-categories span");
  let filtersID = [];

  for (var i = 0; i < filters.length; i++) {
    filtersID.push(filters[i].id);
  }

  // Loop that checks whether list item has same amount of categories as the filters applied
  // if so, display these items
  for (let i = 0; i < listItems.length; i++) {
    let categoryCount = 0;

    for (let o = 0; o < filtersID.length; o++) {

      if (listItems[i].className.includes(filtersID[o])) {
        categoryCount++;
      }
      else {
        continue;
      }
    }

    if (categoryCount == filtersID.length) {
      listItems[i].style.display ="flex";
    }
    else {
      listItems[i].style.display ="none";
    }
  }

}




