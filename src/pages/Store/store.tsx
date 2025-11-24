import { useState, useContext, useEffect } from "react";
import StoreItem from "../../components/storeItem/storeItem";
import { PageContext } from "../../context/PageContext/PageContext";
import { createPetForUser } from "../../services/petsDb";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { decrementUserCoins } from "../../services/userDb";
import { buyPet, setCurrency } from "../../store/slices/userSlice";

function Store() {
    const { currentPage, setCurrentPage } = useContext(PageContext)!;
    const user = useSelector((state: RootState) => state.userSlice.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentPage !== "store") setCurrentPage("store");
    }, [currentPage, setCurrentPage]);

    const [storeItems] = useState([
        {
            id: "1",
            petVariant: "BunnyBerry" as const,
            price: 100,
            name: "BunnyBerry",
        },
        {
            id: "2",
            petVariant: "FloraBunny" as const,
            price: 100,
            name: "FloraBunny",
        },
        {
            id: "3",
            petVariant: "CatMora" as const,
            price: 100,
            name: "CatMora",
        },
        {
            id: "4",
            petVariant: "Fallxie" as const,
            price: 100,
            name: "Fallxie",
        },
    ]);

    const handleBuy = async (itemId: string) => {
        console.log(`Comprando item ${itemId}`);
        const newPetData = storeItems.find((item) => item.id === itemId);
        if (user?.ownedPets.includes(newPetData?.petVariant!)) {
            alert(`You already own ${newPetData?.name}!`);
            return;
        }
        if (newPetData) {
            const petInDb = await createPetForUser(user!.id, newPetData.name);
            await decrementUserCoins(user!.id, newPetData.price);
            console.log("New pet created in DB:", petInDb);
            alert(`You have successfully purchased ${newPetData.name}!`);
            dispatch(buyPet(newPetData.petVariant));
            dispatch(setCurrency(user?.currency! - newPetData.price));
        }
    };

    return (
        <div className="lg:w-[60%] lg:rounded-none w-full lg:h-screen overflow-y-scroll mx-auto custom-scrollbar flex flex-col items-center lg:px-16 px-4 py-8 mt-8 rounded-t-rounded bg-white">
            <div className="flex items-center justify-between w-full mb-10 relative">
                <h1 className="text-xl font-bold text-black absolute left-1/2 transform -translate-x-1/2">
                    Shop
                </h1>
            </div>

            <div className="grid grid-cols-2 gap-8 w-full mb-20">
                {storeItems.map((item) => (
                    <div key={item.id} className="w-full flex justify-center">
                        <StoreItem
                            petVariant={item.petVariant}
                            price={item.price}
                            onBuy={() => handleBuy(item.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Store;
