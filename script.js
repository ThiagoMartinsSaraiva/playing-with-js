const content = document.querySelector('#content')

function filterData (items, val) {
  return items = items.filter(item => item.name.toLowerCase().includes(val.toLowerCase()))
}

function requestData () {
  const val = event.target.value
  if (val) {
    fetch('http://localhost/inputSearch/index.php')
      .then(response => response.json())
      .then(data => showData(data, val))
      .catch((err) => {
        console.log('erro ao buscar dados', err)
      })
  } 
}

function showData (items, val) {
  content.innerHTML = ''
  items = filterData(items, val)
  items.forEach(item => {
    const newItem = document.createElement('div')
    newItem.innerText = item.name
    content.appendChild(newItem)
  })
}