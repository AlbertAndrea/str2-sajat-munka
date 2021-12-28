fetch('./json/got.json')
    .then(response => response.json())
    .then(json => {
        const arrJson = [];
        const body = document.body;
        const names = [];
        const portraits = [];
        const bios = [];
        const pictures = [];
        for (let j = 0; j < 50; j++) {
            if (json[j].dead != true) {
                arrJson.push(json[j]);
                names.push(json[j].name);
                portraits.push(json[j].portrait);
                bios.push(json[j].bio);
                pictures.push(json[j].picture);
            }
        }

        arrJson.sort(function(a, b) {
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
        names.sort();
        portraits.sort();
        bios.sort();
        pictures.sort();

        const div1 = document.createElement('div');
        div1.classList.toggle('container');
        body.append(div1);
        for (let i = 0; i < 48; i++) {
            const div = document.createElement('div');
            div.classList.toggle('alap');
            const div2 = document.createElement('div');
            div2.classList.toggle('avatar');
            const img1 = document.createElement('img');
            img1.setAttribute("src", portraits[i]);
            img1.setAttribute("alt", names[i]);
            img1.setAttribute('width', '70px');
            img1.setAttribute('height', '70px');
            div2.append(img1);
            const p2 = document.createElement('p');
            p2.textContent = names[i];
            p2.setAttribute("onclick", "visibility()");
            p2.classList.toggle('names');
            div.append(div2, p2);
            div1.append(div);
        }
        const aside = document.createElement('div');
        aside.classList.toggle('aside');
        const p3 = document.createElement('h2');
        p3.textContent = 'GAME OF THRONES';
        aside.append(p3);
        body.append(aside);


        for (let k = 0; k < 48; k++) {
            const div3 = document.createElement('div');
            div3.classList.toggle('characterInfo');
            aside.append(div3);
            const picture = document.createElement('img');
            picture.classList.toggle('picture');
            picture.setAttribute("src", pictures[k]);
            picture.setAttribute("alt", names[k]);
            picture.setAttribute('width', '80%');
            picture.setAttribute("style", "border: 2px; border-style: solid; border-color: darkgrey");
            div3.append(picture);
            const div4 = document.createElement('div');
            const p4 = document.createElement('h3');
            p4.textContent = names[k];
            div4.append(p4);
            const div5 = document.createElement('div');
            div5.classList.toggle('bioDiv');
            const p5 = document.createElement('p');
            p5.classList.toggle('bio');
            p5.textContent = bios[k];
            div5.append(p5);
            div3.append(div4, div5);
        }

    })

