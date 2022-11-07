import Card from "../Card/Card.component";


const WishList = ({wishList, handleSetWishList, handleAddPizza, checkoutArr}) => {
    return (
        <div className="flex flex-col justify-center pt-36 w-5/6 mx-auto">
        {wishList && wishList.map((pizza) => {
          return <Card pizza={pizza} wishList={wishList} handleSetWishList={handleSetWishList} handleAddPizza={handleAddPizza} checkoutArr={checkoutArr} />;
        })}
      </div>
    )
}

export default WishList