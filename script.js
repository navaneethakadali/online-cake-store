
document.addEventListener('DOMContentLoaded', function() {
    const cakeList = document.getElementById('cake-list');
    const orderList = document.getElementById('order-list');

    const cakes = [
        {
            name: 'Chocolate Cake',
            description: 'Delicious chocolate cake with rich chocolate frosting.',
            price: 15.99,
            image: 'https://tse2.mm.bing.net/th?id=OIP.oa56ev8-eUl5wwWWKiuFuwHaHa&pid=Api&P=0&h=180'
        },
        {
            name: 'Vanilla Cake',
            description: 'Classic vanilla cake with creamy vanilla frosting.',
            price: 12.99,
            image: 'https://tse4.mm.bing.net/th?id=OIP.STQfzT3Q8WApV8vgJPKwmAHaHa&pid=Api&P=0&h=180'
        },
        {
            name: 'Strawberry Cake',
            description: 'Sweet strawberry cake with fresh strawberries on top.',
            price: 14.99,
            image: 'https://tse3.mm.bing.net/th?id=OIP.dhPDa4is7blUNx9J5jUtxAHaIU&pid=Api&P=0&h=180'
        },
        {
            name: 'Black Forest Cake',
            description: 'Black Forest Cake with chocolate sponge, cherry syrup, vanilla cream and jarred cherries. ',
            price: 16.99,
            image: 'https://tse3.mm.bing.net/th?id=OIP.5QTP8cqcYU7LXELX_fn-xQHaHa&pid=Api&P=0&h=180'
        },
        {
            name: 'Birthday Funfetti Cake',
            description: 'It features a buttery vanilla layer cake studded with the festive colors of the sprinkles',
            price: 12.99,
            image: 'https://insanelygoodrecipes.com/wp-content/uploads/2022/11/Black-Forest-Cake.jpg'
        },
        {
            name: 'Red Velvet Cake',
            description: 'Red velvet cake is a classic. And it’s not just a cake – it’s a symbol of love',
            price: 17.99,
            image: 'https://insanelygoodrecipes.com/wp-content/uploads/2022/11/Red-Velvet-Cake.jpg'
        },
    ];

    const displayCakes = () => {
        if (cakeList) {
            cakeList.innerHTML = '';
            cakes.forEach((cake, index) => {
                const cakeDiv = document.createElement('div');
                cakeDiv.className = 'cake';
                cakeDiv.innerHTML = `
                    <img src="${cake.image}" alt="${cake.name}">
                    <h2>${cake.name}</h2>
                    <p>${cake.description}</p>
                    <p>$${cake.price.toFixed(2)}</p>
                    <button onclick="orderCake(${index})">Order</button>
                `;
                cakeList.appendChild(cakeDiv);
            });
        }
    };

    window.orderCake = (index) => {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push(cakes[index]);
        localStorage.setItem('orders', JSON.stringify(orders));
        window.location.href = 'order.html';
    };

    const displayOrders = () => {
        if (orderList) {
            const orders = JSON.parse(localStorage.getItem('orders')) || [];
            orderList.innerHTML = '';
            orders.forEach(order => {
                const orderDiv = document.createElement('div');
                orderDiv.className = 'order';
                orderDiv.innerHTML = `
                    <img src="${order.image}" alt="${order.name}">
                    <h2>${order.name}</h2>
                    <p>${order.description}</p>
                    <p>$${order.price.toFixed(2)}</p>
                `;
                orderList.appendChild(orderDiv);
            });
        }
    };

    displayCakes();
    displayOrders();
});