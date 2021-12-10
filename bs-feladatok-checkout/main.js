const arr0 = ["Choose"];
const arr1 = ["Choose", "Budapest", "Baranya", "Bács-Kiskun", "Békés", "Borsod-Abaúj-Zemplén", "Csongrád", "Fejér", "Győr-Moson-Sopron", "Hajdú-Bihar", "Heves", "Jász-Nagykun-Szolnok", "Komárom-Esztergom", "Nógrád", "Pest", "Somogy", "Szabolcs-Szatmár-Bereg", "Tolna", "Vas", "Veszprém", "Zala"];
const arr2 = ["Choose", "Alabama", "Alaszka", "Arizona", "Arkansas", "Colorado", "Connecticut", "Delaware", "Dél-Dakota", "Dél-Karolina","Észak-Dakota", "Észak-Karolina", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana"];

const arr3 = [arr0, arr1, arr2];

const setOptions = (select, options) => {
        select.options.length = 0;
        let index=0;
        for(let i in options){
                select.options[index++] = new Option(options[i],i);
        }
}

const modSelect = () => {
        let country = document.getElementById('country');
        let selindex = country.selectedIndex;
        setOptions(document.getElementById('state'), arr3[selindex]);
}

document.getElementById('country').onchange = modSelect;
