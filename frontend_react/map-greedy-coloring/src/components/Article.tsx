type PropsArticle = {
  setIsArticleOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedLayer: string;
};

const Article = ({ setIsArticleOpen, selectedLayer }: PropsArticle) => {
  return (
    <div
      id="containerFullDesc"
      className="absolute right-0 left-0 w-screen h-screen bg-[rgba(14,33,39,0.8)] text-white box-border p-[100px] font-poppins text-[22px] overflow-auto cursor-auto z-10"
    >
      <h1
        id="title"
        className="capitalize font-kaushan text-[150px] [text-shadow:_4px_4px_3px_rgb(255_255_255_/_61%)] text-amber-600 m-0"
      >
        {selectedLayer}
      </h1>

      <img
        src="https://i1.wp.com/hechingerreport.org/wp-content/uploads/2018/04/Jennifer-Heller-Buckley-PHOTO1.jpg?ssl=1"
        alt="article image"
        id="image"
        className="float-right mt-[40px] mr-[40px] min-w-[500px] max-w-[500px] p-[60px]"
      />
      
      <p id="desc" className="text-right">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam dolore vitae, atque
        temporibus eveniet nostrum eos natus magni numquam laboriosam assumenda explicabo vero,
        eaque enim velit reiciendis ex pariatur, neque vel provident modi. Libero sint officia,
        repudiandae nobis asperiores velit recusandae ipsam error ad? Perferendis asperiores facere
        eius error voluptas? lorem100
      </p>

      <i
        className="fa-solid fa-circle-xmark absolute right-[100px] top-[100px] z-20 text-white scale-150 cursor-pointer"
        onClick={() => setIsArticleOpen(false)}
      ></i>
    </div>
  );
};

export default Article;
