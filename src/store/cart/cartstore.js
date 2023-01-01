import create from 'zustand';

export const useCartStore = create((set) => {
    return {
        checkoutArr: [],
        cartLength: 0,
        cartTotal: 0,
        setCheckoutArr: (checkoutArr) =>
            set((state) => {
                return {
                    ...state,
                    checkoutArr,
                };
            }),
        handleAddPizza: (pizza, quantity, size, subTotal) => {
            const addPizza = (checkoutArr) => {
                const newPizza = { ...pizza, quantity, size, subTotal };

                for (let inst of checkoutArr) {
                    if (inst.name === newPizza.name && inst.size === newPizza.size) {
                        inst.quantity = newPizza.quantity;
                        return [...checkoutArr];
                    }
                }
                return [...checkoutArr, newPizza];
            };

            set((state) => {
                const newCartArr = addPizza(state.checkoutArr);
                const newCartLength = newCartArr.reduce((acc, inst) => acc + inst.quantity, 0);
                const newCartTotal = newCartArr.reduce((acc, inst) => acc + inst.subTotal, 0);
                return {
                    ...state,
                    checkoutArr: newCartArr,
                    cartLength: newCartLength,
                    cartTotal: newCartTotal
                };
            });
        },
        handleRemovePizza: (pizza) => {
            const removePizza = (checkoutArr) => {
                const index = checkoutArr.indexOf(pizza);
                checkoutArr.splice(index, 1);
                return [...checkoutArr];
            };
            set((state) => {
                const newCartArr = removePizza(state.checkoutArr);
                const newCartLength = newCartArr.reduce((acc, inst) => acc + inst.quantity, 0);
                const newCartTotal = newCartArr.reduce((acc, inst) => acc + inst.subTotal, 0);
                return {
                    ...state,
                    checkoutArr: newCartArr,
                    cartLength: newCartLength,
                    cartTotal: newCartTotal
                };
            });
        },
        handleUpdatePizza: (pizza, quantity, size, subTotal) => {
            const updatePizza = (checkoutArr) => {
                const index = checkoutArr.indexOf(pizza);
                Object.assign(checkoutArr[index], { quantity, size, subTotal });
                return [...checkoutArr];
            };
            set((state) => {
                const newCartArr = updatePizza(state.checkoutArr);
                const newCartLength = newCartArr.reduce((acc, inst) => acc + inst.quantity, 0);
                const newCartTotal = newCartArr.reduce((acc, inst) => acc + inst.subTotal, 0);

                return {
                    ...state,
                    checkoutArr: newCartArr,
                    cartLength: newCartLength,
                    cartTotal: newCartTotal
                };
            });
        }
    }
})
