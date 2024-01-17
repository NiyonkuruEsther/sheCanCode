import Filter from "./Filter";
import Search from "./Search";

const Menu = () => {
  return (
    <div className="fixed flex gap-12 z-[1000] bg-gray-950 w-full top-0 pt-12">
      <Search />
      <div className="flex gap-8">
        <Filter />
        
        {/* <Sort /> */}
      </div>
    </div>
  );
};

export default Menu;
