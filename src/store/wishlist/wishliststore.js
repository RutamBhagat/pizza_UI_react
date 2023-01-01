import create from 'zustand';

export const useWishListStore = create((set) => {
    return {
        wishList: [],
        setWishList: (wishList) =>
            set((state) => {
                return {
                    ...state,
                    wishList,
                };
            }),
        handleSetWishList: (pizza, command) => {
            const manageWishList = (wishList, command) => {
                if (command === 'add') {
                    let notPresent = true;
                    for (let inst of wishList) {
                        if (inst.name === pizza.name) {
                            notPresent = false;
                            break;
                        }
                    }
                    if (notPresent) {
                        return [...wishList, pizza];
                    }
                } else {
                    const index = wishList.indexOf(pizza);
                    wishList.splice(index, 1);
                    return [...wishList];
                }
            }
            set((state) => {
                const newWishList = manageWishList(state.wishList, command);
                return {
                    ...state,
                    wishList: newWishList,
                };
            });
        },
    };
});
