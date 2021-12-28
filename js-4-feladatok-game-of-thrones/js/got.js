fetch('./json/got.json')
  .then(response => response.json())
  .then(json => {
    const arrJson = [];
    const body = document.body;
    for (let j = 0; j < 50; j++) {
      if (json[j].dead != true) {
        arrJson.push(json[j]);
      }
    }

    // sort by mane
    arrJson.sort(function (a, b) {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });

    console.log(arrJson);

    const div1 = document.createElement('div');
    div1.classList.toggle('container');
    body.append(div1);
    for (let i = 0; i < 48; i++) {
      const div = document.createElement('div');
      div.classList.toggle('alap');
      const div2 = document.createElement('div');
      div2.classList.toggle('avatar');
      const img1 = document.createElement('img');
      img1.setAttribute("src", arrJson[i].portrait);
      img1.setAttribute("alt", arrJson[i].mane);
      img1.setAttribute('width', '70px');
      img1.setAttribute('height', '70px');
      div2.append(img1);
      const p2 = document.createElement('p');
      p2.textContent = arrJson[i].name;
      p2.addEventListener('click', () => {
        clickHandler(arrJson[i]);
      });

      p2.classList.toggle('names');
      div.append(div2, p2);
      div1.append(div);
    }

    const aside = document.createElement('div');
    aside.classList.toggle('aside');
    const p3 = document.createElement('h2');
    p3.textContent = 'GAME OF THRONES';
    const divActiv = document.createElement('div');
    divActiv.classList.toggle('characterInfo', 'activ');
    divActiv.setAttribute('id', 'kell');
    
    aside.append(p3, divActiv);
    body.append(aside);

    function clickHandler(a) {
      divActiv.textContent = " ";
      const picture = document.createElement('img');
      picture.classList.toggle('picture');
      picture.setAttribute("src", a.picture || './assets/pictures/placeholder_got.jpg');
      picture.setAttribute("alt", a.name);
      picture.setAttribute('width', '80%');
      picture.setAttribute("style", "border: 2px; border-style: solid; border-color: darkgrey");
      divActiv.append(picture);
      const div4 = document.createElement('div');
      const p4 = document.createElement('h3');
      p4.textContent = a.name;
      div4.append(p4);
      const houseImg = document.createElement('img');
      houseImg.setAttribute("src", './assets/houses/${a.house}.png');
      houseImg.setAttribute("alt", a.house || '');
      div4.append(houseImg);
      const div5 = document.createElement('div');
      div5.classList.toggle('bioDiv');
      const p5 = document.createElement('p');
      p5.classList.toggle('bio');
      p5.textContent = a.bio;
      div5.append(p5);
      divActiv.append(div4, div5);
      divActiv.style.display = 'block';
    }


  })

