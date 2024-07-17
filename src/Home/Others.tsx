interface CardProps {
  img: string;
  title: string;
}

const CategoryCard = ({ img, title }: CardProps) => {
  return (
    <div className="relative flex flex-col w-[380px] h-[565px] shadow border  rounded-2xl  overflow-hidden hover:shadow-xl">
      <img
        src={img}
        alt="other1"
        className="w-full h-full object-cover rounded-2xl "
        loading="lazy"
      />
      <div className="w-full h-[140px] bg-main-800/40 absolute flex bottom-0 justify-center items-center">
        <h3 className="text-7xl font-semibold text-white">{title}</h3>
      </div>
    </div>
  );
};

const Others = () => {
  return (
    <div className="mb-10">
      <div className="flex w-full justify-end ">
        <h3 className="text-7xl font-semibold text-main-800">Categorys</h3>
      </div>
      <div className="mt-20 flex justify-between">
        <CategoryCard img="/other1.svg" title="Sport" />
        <CategoryCard img="/other2.svg" title="Cultural" />
        <CategoryCard img="/other3.svg" title="Theater" />
      </div>
    </div>
  );
};

export default Others;
