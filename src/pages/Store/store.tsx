import { useState } from "react";
import NavBar from "../../components/Nav/NavBar";
import StoreItem from "../../components/storeItem/storeItem";
import PetDisplay from "../../components/petDisplay/petDisplay";
import Icon from "../../components/Icon/Icon";
import SquareContainer from "../../components/RoundedContainer/squareContainer";

function Store() {
    const [coins] = useState<number>(120);
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
                <div
                    className="w-[40%] h-screen bg-accent hidden lg:flex lg:flex-col items-end justify-start pt-8 p-32"
                    style={{
                        clipPath:
                            "polygon(20% 0, 100% 0%, 100% 100%, 20% 100%, 0 50%)",
                    }}
                >
                    <SquareContainer
                        variant="coins"
                        className="flex items-center"
                    >
                        <h2 className="text-s text-black font-bold mr-4">
                            {coins}
                        </h2>
                        <Icon variant="CoinIcon" className="w-8 h-8" />
                    </SquareContainer>
                    <div className="h-[40%] aspect-square bg-white rounded-full mx-auto my-auto">
                        <PetDisplay size="large" />
                    </div>
                </div>
                <div className="w-full h-[40%] bg-accent lg:hidden flex flex-col items-end justify-start pt-8 p-8">
                    <SquareContainer
                        variant="coins"
                        className="flex items-center"
                    >
                        <h2 className="text-s text-black font-bold mr-4">
                            {coins}
                        </h2>
                        <Icon variant="CoinIcon" className="w-8 h-8" />
                    </SquareContainer>
                    <div className="w-[60%] aspect-square bg-white rounded-full mx-auto my-auto">
                        <PetDisplay size="large" />
                    </div>
                </div>
                <div className="lg:w-[60%] lg:rounded-none w-full lg:h-screen overflow-y-scroll mx-auto custom-scrollbar flex flex-col items-center lg:px-16 px-4 py-8 rounded-t-rounded bg-white">
                    <div className="flex flex-row items-center justify-between w-full mt-8">
                        <h1 className="lg:text-l text-m font-bold text-black">
                            Shop
                        </h1>
                        <div className="flex flex-row items-center gap-2">
                            <SquareContainer
                                variant="coins"
                                className="flex items-center"
                            >
                                <h2 className="text-s text-black font-bold mr-4">
                                    {coins}
                                </h2>
                                <Icon variant="CoinIcon" className="w-8 h-8" />
                            </SquareContainer>
                        </div>
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
