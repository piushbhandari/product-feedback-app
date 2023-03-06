const suggestionListContainer = document.querySelector(".feedback-listing");

let jsonData = null;
let filteredData = null;

window.addEventListener("DOMContentLoaded", (e) => {
  fetchJsonData()
    .then((data) => {
      jsonData = data;
      filteredData = data;

      loadDataToScreen(filteredData, suggestionListContainer);
    })
    .catch((error) => {
      console.log(error);
    });
});

async function fetchJsonData() {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

function loadDataToScreen(data, container) {
  clearContainer(container);
  const { productRequests } = data;
  console.log(productRequests);

  productRequests.forEach((product) => {
    const { category, comments, description, id, title, upvotes } = product;
    const commentLength = comments ? comments.length : 0;

    const elementContents = `
    <button class="upvoteBtn">
    <svg aria-hidden="true" focusable="false" width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>

      <span class="upvoteCount">${upvotes}</span>
      <span class="visuallyhidden"> upvote post </span>
    </button>

    <div class="feedback-listing__content">
      <a href="#" class="feedback-listing__link">
        <h3 class="feedback-listing__title">
          ${title}
        </h3></a
      >
      <p class="feedback-listing__desc">
      ${description}
      </p>

      <button class="body3 tag-button">${category}</button>
    </div>

    <a
      href="#"
      aria-label="view comments"
      class="feedback-listing__comments"
    >
    <svg aria-hidden="true" focusable="false" width="18" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z" fill="#CDD2EE" fill-rule="nonzero"/></svg>

      <p class="body1 commentsCounter">${commentLength}</p>
    </a>
    `;

    const elementSettings = {
      content: elementContents,
      element: "li",
      attributes: {
        class: "feedback-listing__item",
        id: id,
      },
    };
    newElement(elementSettings, container);
  });
}

function newElement(elementConfig, container) {
  const { content, element, attributes } = elementConfig;
  const newElement = document.createElement(element);

  for (const [key, value] of Object.entries(attributes)) {
    newElement.setAttribute(key, value);
  }
  newElement.innerHTML = content;
  container.appendChild(newElement);
}

function clearContainer(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
