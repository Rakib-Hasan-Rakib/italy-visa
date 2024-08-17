const Card = ({ heading, desc, children }) => {
  return (
    <>
      <div className="card p-4 lg:p-6 bg-gra-500">
        <div className="flex justify-center items-center">{children}</div>
        <h3 className="text-2xl lg:text-2xl 2xl:text-3xl font-semibold text-center my-2 lg:mb-4">
          {heading}
        </h3>
        <p className="text-justify">{desc}</p>
      </div>
    </>
  );
};
export default Card;
