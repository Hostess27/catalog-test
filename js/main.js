async function getCart() {
    const url = "./__in/data.json";
    try {
        const res = await fetch(url).then((res) => res.json());
        return res;
    } catch (error) {
        console.log(error);
    }
}
//add div Featured

async function appDivFeatured() {
    let carts = await getCart();
    carts
        .sort((a, b) => b.rating - a.rating)
        .slice(4)
        .forEach((cart) => {
            let cartList = document.getElementById("cart-featured");
            cartList.append(createDivFeatured(cart));
        });
}

function createDivFeatured(carts) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("h2");
    let tags = document.createElement("p");
    let star = document.createElement("div");

    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(tags);
    div.appendChild(star);

    div.id = carts.id;
    div.className = "cart__list";
    img.src = "__in/" + carts.image;
    img.className = "cart__img";
    title.textContent = carts.title;
    title.className = "cart__name";
    tags.textContent = "#" + carts.tags;
    tags.className = "cart__paragraph";
    star.className = "cart__star";

    return div;
}

appDivFeatured();

//add div Last

async function appDivLast() {
    let carts = await getCart();
    carts
        .sort((a, b) => b.age - a.age)
        .slice(7)
        .forEach((cart) => {
            let cartList = document.getElementById("cart-last");
            cartList.append(createDivLast(cart));
        });
}

function createDivLast(carts) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("h2");
    let tags = document.createElement("p");
    let star = document.createElement("div");

    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(tags);
    div.appendChild(star);

    div.id = carts.id;
    div.className = "cart__list_last";
    img.src = "__in/" + carts.image;
    img.className = "cart__img_last";
    title.textContent = carts.title;
    title.className = "cart__name_last";
    tags.textContent = "#" + carts.tags;
    tags.className = "cart__paragraph_last";
    star.className = "cart__star_last";
    return div;
}

appDivLast();
