import Pizza from "./Pizza";

function Menu({ data }) {
  return (
    <section className="container mx-auto mt-8 px-16 h-">
      <div className="flex  flex-col items-center justify-center px-6 mx-auto space-y-16">
        <div className="flex flex-col">
          <div>
            <hr className="py-0 " />
            <h1 className="text-4xl pb-2 text-center">Our Menu</h1>
            <hr />
          </div>

          <div className="mt-5">
            <p className="text-center ">
              Authentic Italian cuisine. 6 creative dishes to choose from. All
              from our stone oven, all organic, all delicious.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2  gap-16 ">
          {data.map((item) => {
            return <Pizza item={item} key={item.name} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Menu;
