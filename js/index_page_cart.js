
      $(".Click-here").on("click", function () {
        $(".custom-model-main").addClass("model-open");
      });
      $(".close-btn, .bg-overlay").click(function () {
        $(".custom-model-main").removeClass("model-open");
      });




      if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", ready);
      } else {
        ready();
      }

      function ready() {
        var removeCartItemsButton =
          document.getElementsByClassName("btn-removeIncart");
        // console.log(removeCartItemsButton)
        for (var i = 0; i < removeCartItemsButton.length; i++) {
          var button = removeCartItemsButton[i];
          button.addEventListener("click", removeCartItem);
        }

        var quantityInputs = document.getElementsByClassName(
          "cart_quantity_element"
        );
        for (var i = 0; i < quantityInputs.length; i++) {
          var input = quantityInputs[i];
          input.addEventListener("change", quantityChanged);
        }

        var addToCartButtons = document.getElementsByClassName(
          "addtocart"
        );
        for (var i = 0; i < addToCartButtons.length; i++) {
          var button = addToCartButtons[i];
          button.addEventListener("click", addToCartClicked);
        }
      }
      function removeCartItem(event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.parentElement.parentElement.remove();
        updateCarttotal();
      }
      function quantityChanged(event) {
          var input = event.target;
          if (isNaN(input.value) || input.value <= 0) {
              input.value = 1;
          }
          updateCarttotal();
      }
      function addToCartClicked(event) {
          var button = event.target;
          var shopItem = button.parentElement.parentElement.parentElement;
          var title = shopItem.getElementsByClassName("productinfo_title")[0].innerText;
          var price = shopItem.getElementsByClassName("pricenow")[0].innerText;
          var imagesrc = shopItem.getElementsByClassName("prodduct_img")[0].src;
        //   var quantityValue = shopItem.getElementsByClassName(
        //       "w-commerce-commerceaddtocartquantityinput"
        //   )[0].value;
          var quantityValue = "1";
          console.log(title, price, imagesrc, quantityValue)
          addItemToCart(title, price, imagesrc, quantityValue);
          updateCarttotal();
      }
      function addItemToCart(title, price, imagesrc, quantityValue) {
          var cartRow = document.createElement("div");
          cartRow.classList.add("w-commerce-commercecartlist", "cart-list", "cart_list_rows");
          cartRow.setAttribute(
              "data-wf-collection",
              "database.commerceOrder.userItems"
          );
          cartRow.setAttribute(
              "data-wf-template-id",
              "wf-template-c451091d-f7cf-9fb7-0eeb-cad6d340c589"
          );
          var cartItems = document.getElementsByClassName("cart_items_list_in_cart")[0];
          var cartItemstitleName = cartItems.getElementsByClassName(
              "w-commerce-commercecartproductname"
          );
        //   console.log(cartItemstitleName.innerText);
          for (var i = 0; i < +cartItemstitleName.length; i++) {
              if (cartItemstitleName[i].innerText == title) {
                  alert("This item is already added to cart");
                //   console.log("already have");
                  return;
              }
          }
          var cartRowsContant = `
          
              <div class="w-commerce-commercecartitem cart-item cart_rows_container">
              <img
                  data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.0.sku.f_main_image_4dr%22%7D%7D%5D"
                  src="${imagesrc}"
                  alt=""
                  class="w-commerce-commercecartitemimage image"
              />
              <div class="w-commerce-commercecartiteminfo div-block">
                  <div
                  data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.0.product.f_name_%22%7D%7D%5D"
                  class="w-commerce-commercecartproductname"
                  >
                  ${title}
                  </div>
                  <div class="priceElement"
                  data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.0.sku.f_price_%22%7D%7D%5D"
                  >
                  ${price}
                  </div>
                  <!-- <script
                  type="text/x-wf-template"
                  id="wf-template-c451091d-f7cf-9fb7-0eeb-cad6d340c58f"
                  >
                  %3Cli%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems.0.product.f_sku_properties_3dr%255B%255D.name%2522%257D%257D%255D%22%3E%3C%2Fspan%3E%3Cspan%3E%3A%20%3C%2Fspan%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems.0.product.f_sku_properties_3dr%255B%255D%2522%257D%257D%255D%22%3E%3C%2Fspan%3E%3C%2Fli%3E
                  </scrip> -->
                  
                  <a
                  href="#"
                  data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.0.sku.id%22%7D%7D%5D"
                  class="remove w-inline-block"
                  data-wf-cart-action="remove-item"
                  data-commerce-sku-id="62c4dd1248d027de8f49e4ec"
                  ><div class="btn-removeIncart">Remove</div></a
                  >
              </div>
              <input
                  type="number"
                  data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.0.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.0.sku.id%22%7D%7D%5D"
                  class="w-commerce-commercecartquantity checkout_quantity cart_quantity_element"
                  required=""
                  pattern="^[0-9]+$"
                  inputmode="numeric"
                  name="quantity"
                  data-wf-cart-action="update-item-quantity"
                  data-commerce-sku-id="62c4dd1248d027de8f49e4ec"
                  value="${quantityValue}"
              />
              </div>
          
          `;
          cartRow.innerHTML = cartRowsContant;
          cartItems.append(cartRow);
          cartRow
              .getElementsByClassName("btn-removeIncart")[0]
              .addEventListener("click", removeCartItem);
          cartRow
              .getElementsByClassName("cart_quantity_element")[0]
              .addEventListener("change", quantityChanged);
      }
      
      function updateCarttotal() {
          var cartItemContainer = document.getElementsByClassName(
              "cart_list_rows"
          )[0];
          var cartRows = document.getElementsByClassName("cart_rows_container");
          var total = 0;
          for (var i = 0; i < cartRows.length; i++) {
              var cartRow = cartRows[i];
              var priceElement = cartRow.getElementsByClassName("priceElement")[0];
              var quantityElement = cartRow.getElementsByClassName(
                  "cart_quantity_element"
              )[0];
              var price = parseFloat(priceElement.innerHTML.replace("$&nbsp;", ""));
              var quantity = quantityElement.value;
              total = total + price * quantity;
          }
          total = Math.round(total * 100) / 100;
          document.getElementsByClassName(
              "w-commerce-commercecartordervalueInCart"
          )[0].innerText = "$" + total + " USD";
      }