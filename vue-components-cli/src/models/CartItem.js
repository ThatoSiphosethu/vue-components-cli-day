export default function CartItem(libraryItem, removeFunction) {
    this.libraryItem = libraryItem;

    this.checkOut = () => this.libraryItem.checkOut();

    this.remove = removeFunction || function(){};
}