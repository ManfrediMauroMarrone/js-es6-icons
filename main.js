const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];

// creo un arrai di colori
const colors = ['purple', 'tomato', 'lightgreen'];
// creo un array vuoto in cui inserire i tipi delle icone
const iconTypes = [];
// scorro tutte le icone
icons.forEach((icon) => {
// estraggo solo il tipo
  const {type} = icon
// se il tipo non è contenuno nell'array lo pusho
  if (!iconTypes.includes(type)) {
    iconTypes.push(type)
  }
})

console.log(iconTypes);

// scorro tutte le icone
icons.forEach((icon) => {
  // console.log(icon);

  const {name,prefix,family,type} = icon
  // estraggo nome prefix e family e type delle icone

  console.log(name,prefix,family,type);
  // stampo in pagina un div con dentro l'icona col proprio nome

  // trovo l'indice del tipo dell'icona corrente
  const typeIndex = iconTypes.indexOf(type)

  console.log(name, typeIndex);
  // associo l'indice del tipo al colore corrispondente
  const iconColor = colors[typeIndex]
  console.log(iconColor);
  $('.icons-container').append(`
    <div>
      <i class="${family} ${prefix}${name}" style="color:${iconColor}"></i>
      <span>${name}</span>
    </div>
  `);

});
