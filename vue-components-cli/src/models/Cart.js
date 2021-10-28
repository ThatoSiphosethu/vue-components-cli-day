import CartItem from "./CartItem";

export default function Cart(){
    let arr = [];

    arr.addItem = function(item){

        this.push(new CartItem(item,((collection) => function(){
            collection.removeItem(this); // "this" refers to the LibraryItem
        })(this)));

        // allows us to chain methods
        return this;
    }

    arr.removeItem = function(item){

        this.splice(this.indexOf(item), 1);

        return this;
    }

    arr.checkout = function () {
        this.forEach((CartItem) => {
            CartItem.checkout()
        })

        this.splice(0);
    }

    return arr;
}

