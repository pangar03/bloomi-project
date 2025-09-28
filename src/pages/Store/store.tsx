import { useState } from "react";
import NavBar from "../../components/Nav/NavBar";
import StoreItem from "../../components/storeItem/storeItem";
import LateralBar from "../../components/LateralBar/LateralBar";

function Store() {
    const [storeItems] = useState([
        {
            id: "1",
            petVariant: "BunnyBerry" as const,
            price: 100,
            name: "BunnyBerry"
        },
        {
            id: "2", 
            petVariant: "FloraBunny" as const,
            price: 100,
            name: "FloraBunny"
        },
        {
            id: "3",
            petVariant: "CatMora" as const,
            price: 100,
            name: "CatMora"
        },
        {
            id: "4",
            petVariant: "Fallxie" as const,
            price: 100,
            name: "Fallxie"
        }
    ]);

    const handleBuy = (itemId: string) => {
        console.log(`Comprando item ${itemId}`);
        // Aquí iría la lógica de compra
    };

    return (
        <div className="h-screen w-full flex bg-accent lg:bg-white">
            <NavBar />
            <div className="lg:w-[80%] w-[100%] flex flex-col justify-center lg:flex-row-reverse lg:justify-between items-center ml-auto lg:pl-8">
                <LateralBar />
                <div className="lg:w-[60%] lg:rounded-none w-full lg:h-screen overflow-y-scroll mx-auto custom-scrollbar flex flex-col items-center lg:px-16 px-4 py-8 rounded-t-rounded bg-white">
                    <div className="flex flex-row items-center justify-between w-full mt-8">
                        <h1 className="lg:text-l text-m font-bold text-black">
                            Shop
                        </h1>
                    </div>
                    <div className="grid grid-cols-2 gap-6 w-full mt-10">
                        {storeItems.map((item) => (
                            <StoreItem
                                key={item.id}
                                petVariant={item.petVariant}
                                price={item.price}
                                onBuy={() => handleBuy(item.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Store;
