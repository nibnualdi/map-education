import villageDetail from "../constants/villageDetail";

type PropsArticle = {
  setIsArticleOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedLayer: string;
  map: any;
};

const Article = ({ setIsArticleOpen, selectedLayer, map }: PropsArticle) => {
  const selectedVillage = villageDetail.find(
    (e) => e.name.toLocaleLowerCase() === selectedLayer.toLocaleLowerCase()
  );

  const handleClose = () => {
    setIsArticleOpen(false);
    map.current.flyTo({ center: [106.82938, -6.18624], zoom: 12, speed: 0.3 });
  };

  return (
    <div
      id="containerFullDesc"
      className="absolute right-0 left-0 w-screen h-screen bg-[rgba(14,33,39,0.8)] text-white box-border p-[100px] font-jakarta-plus font-normal text-[22px] overflow-auto cursor-auto z-10"
    >
      <h1
        id="title"
        className="capitalize text-left font-jakarta-plus font-bold text-[150px] [text-shadow:_4px_4px_3px_rgb(255_255_255_/_61%)] text-amber-600 m-0"
      >
        {selectedLayer}
      </h1>

      <img
        src={selectedVillage?.image}
        alt="article image"
        id="image"
        className="float-right mt-[40px] mr-[40px] min-w-[500px] max-w-[500px] p-[60px]"
      />

      <p id="desc" className="text-left">
        {selectedVillage?.desc}
      </p>

      <i
        className="fa-solid fa-circle-xmark absolute right-[100px] top-[100px] z-20 text-white scale-150 cursor-pointer"
        onClick={handleClose}
      ></i>
    </div>
  );
};

export default Article;
