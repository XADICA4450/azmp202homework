import { products } from "./data.js";

const cards = document.querySelector(".cards");
const modal = document.createElement("div");  
const form = document.querySelector(".addForm form")

function drawtable(products) {
    cards.innerHTML = ""; 
    products.forEach(product => {
        console.log(product);
        const card = document.createElement("div");
        card.classList.add("card"); 
        card.innerHTML = `
        <img src="${product.image}" width="100"/>
        <h2>${product.title}</h2>
        <p>$${product.price}</p>
        <h4>${product.description}</h4>

        <div class="buttons">
        <button class="butn details" data-id="${product.id}">Details</button>
        <button class="butn delete">Delete</button>


        </div>
        `;
        cards.appendChild(card);
    });

    const delete_btns = document.querySelectorAll(".delete");
    delete_btns.forEach((btn) => {
        btn.addEventListener("click", function () {
            const productId = this.getAttribute("data-id");
            const idx = products.findIndex((item) => item.id == productId);

            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    delete_card(idx, this);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });
        });
    });

    const details_btns = document.querySelectorAll(".details");
    details_btns.forEach((btn) => {
        btn.addEventListener("click", function () {
            const productId = this.getAttribute("data-id");
            const product = products.find((item) => item.id == productId);
            showDetailsModal(product); 
        });
    });
}

function delete_card(index, btn) {
    products.splice(index, 1);
    btn.closest(".card").remove();
    drawtable(products);
}


function showDetailsModal(product) {
    modal.innerHTML = `
    <div class="modal-content">
        <span class="close-btn">GO BACK</span>
        <h2>${product.title}</h2>
        <img src="${product.image}" width="200" />
        <p><strong>Price:</strong> $${product.price}</p>
        <p><strong>Description:</strong> ${product.description}</p>
    </div>
    `;

    modal.classList.add("modal");
    document.body.appendChild(modal);


    modal.style.display = "block";


    const closeBtn = modal.querySelector(".close-btn");
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        modal.remove();
    });

 
    
}

form.addEventListener("submit", function(event){
    event.preventDefault();
    const title = document.querySelector('input[name="title"]').value;
    const price = parseFloat(document.querySelector('input[name="price"]').value);
    const description = document.querySelector('input[name="description"]').value;
    const image = document.querySelector('input[name="image"]').value;
  const newProduct = {
        id: Date.now(),
        title: title,
        price: price,
        description: description,
        image: image,
    };

    products.push(newProduct);
    form.reset();
    drawtable(products);
})


drawtable(products);