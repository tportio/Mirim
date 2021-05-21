const div = document.querySelector('#root');

fetch(
    'https://api.spacex.land/graphql/',
    {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': 'da2-5lgtgu5ainh2djxdv2pkp6boxm',
      },
      body: JSON.stringify({
          query : `
            query {
                ships {
                    name
                    home_port
                    image
                    url
                }
            }
          `
        })
})
.then(res => res.json())
.then(data => showShips(data.data.ships))

// api로부터 데이터를 가져와 ship를 보여주는 함수
function showShips(data) {
    for(let i=0; i<data.length; i++) {
        if(data[i].image !== null) {
            const ship = document.createElement('div');
            ship.className = 'ship'
            const image = document.createElement('img');
            const name = document.createElement('span');
        
            image.src = data[i].image
            image.width = 600;
            image.width = 400;
            name.innerText = `이름: ${data[i].name}`;
            ship.appendChild(image);
            ship.appendChild(name);
            div.appendChild(ship);
        }
    }
}