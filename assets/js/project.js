let blogs = [];

function addBlog(event) {
  event.preventDefault();
  let project = document.getElementById("input-project").value;
  let description = document.getElementById("input-description").value;
  let image = document.getElementById("input-image").files;
  let nodejs = document.getElementById("nodejs").checked;
  let reactjs = document.getElementById("reactjs").checked;
  let vuejs = document.getElementById("vuejs").checked;
  let python = document.getElementById("python").checked;
  validation(project, description, image);
  image = URL.createObjectURL(image[0]);
  if (nodejs == true) {
    nodejs = document.getElementById("nodejs").checked;
  } else {
    nodejs = "";
  }
  if (reactjs == true) {
    reactjs = document.getElementById("reactjs").checked;
  } else {
    reactjs = "";
  }
  if (vuejs == true) {
    vuejs = document.getElementById("vuejs").checked;
  } else {
    vuejs = "";
  }
  if (python == true) {
    python = document.getElementById("python").checked;
  } else {
    python = "";
  }
  let blog = {
    project: project,
    description: description,
    image: image,
    nodejs: nodejs,
    reactjs: reactjs,
    vuejs: vuejs,
    python: python,
  };
  blogs.push(blog);
  renderBlog();
}

function validation(project, description, image) {
  if (project == "") {
    return alert("Mohon isikan kolom project");
  } else if (description == "") {
    return alert("Mohon isikan deskripsi");
  } else if (image.length == 0) {
    return alert("Mohon isikan gambar");
  }
}

function renderBlog() {
  document.getElementById("blogs").innerHTML = `
  <div class="box-blog1">
    <img
      src="assets/images/chrollo.jpg"
      class="image"
      alt=""
    /> 
    <a href="detail.html">
    <h3>Deskripsi</h3>
    </a>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, non.
      Dolores molestias pariatur, nobis consequatur quis qui? Illo, sed
      possimus?
    </p>
    <i class="fa-brands fa-node-js icon-size"></i>
    <i class="fa-brands fa-react icon-size"></i>
    <div class="button-group">
      <div class="button-child">
        <button class="button-edit">Edit</button>
      </div>
      <div class="button-child">
        <button class="button-delete">Delete</button>
      </div>
    </div>
  </div>`;

  for (let i in blogs) {
    document.getElementById("blogs").innerHTML += `
    <div class="box-blog1">
      <img
        src="${blogs[i].image}"
        class="image"
        alt=""
      /> 
      <a href="detail.html">
      <h3>${blogs[i].project}</h3>
      </a>
      <p>
        ${blogs[i].description}
      </p>
      <i class="${blogs[i].nodejs}"></i>
      <i class="${blogs[i].reactjs}"></i>
      <i class="${blogs[i].vuejs}"></i>
      <i class="${blogs[i].python}"></i>
      <div class="button-group">
        <div class="button-child">
          <button class="button-edit">Edit</button>
        </div>
        <div class="button-child">
          <button class="button-delete">Delete</button>
        </div>
      </div>
    </div>
        `;
  }
}
