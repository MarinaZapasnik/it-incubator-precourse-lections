// data

const info = {

    title: 'it-incubator',
    graduatesCount: 2000,
    areYouChampion: true,
    tehnologies: ['Front', 'Back', 'DevOps']

}


// const title = 'it-incubator';
// const graduatesCount = 2000;
// const areYouChampion = true;

// render

const pageTitleElement = document.createElement('h1');
pageTitleElement.innerText = info.title;
document.body.append(pageTitleElement);

const graduatesCountElement = document.createElement('input');
graduatesCountElement.value = info.graduatesCount;
document.body.append(graduatesCountElement);

const areYouChampionElement = document.createElement('input');
areYouChampionElement.type = 'checkbox';
areYouChampionElement.checked = info.areYouChampion;
document.body.append(areYouChampionElement);
