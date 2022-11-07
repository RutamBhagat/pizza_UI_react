const ItemsInCart = ({ checkoutArr }) => {
  if (checkoutArr.length !== 0) {
    return (
      <span className="absolute inset-0 object-right-top -mr-6">
        <div className="inline-flex items-center px-1 py-0.25 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
          {checkoutArr.length}
        </div>
      </span>
    );
  } else {
    return <div></div>;
  }
};
export default ItemsInCart;
