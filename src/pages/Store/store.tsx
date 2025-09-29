import { useState, useContext, useEffect } from "react";
import StoreItem from "../../components/storeItem/storeItem";
import Icon from "../../components/Icon/Icon";
import { PageContext } from "../../context/PageContext/PageContext";

function Store() {
    const { currentPage, setCurrentPage } = useContext(PageContext)!;
    
    useEffect(() => {
        if (currentPage !== "store") setCurrentPage("store");
    }, [currentPage, setCurrentPage]);

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
        <div className="lg:w-[60%] lg:rounded-none w-full lg:h-screen overflow-y-scroll mx-auto custom-scrollbar flex flex-col items-center lg:px-16 px-4 py-8 mt-8 rounded-t-rounded bg-white">
          
          <div className="flex items-center justify-between w-full mb-10 relative">
           
            <div className="flex items-center gap-2">
              <Icon variant="CoinIcon" className="w-6 h-6 text-yellow-500" />
              <span className="text-lg font-semibold text-gray-800">$120</span>
            </div>
      
            
            <h1 className="text-xl font-bold text-black absolute left-1/2 transform -translate-x-1/2">
              Shop
            </h1>
          </div>
      
          
          <div className="grid grid-cols-2 gap-8 w-full">
            {storeItems.map((item) => (
              <div
                key={item.id}
                className="transform scale-110 hover:scale-115 transition-transform duration-300"
              >
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
