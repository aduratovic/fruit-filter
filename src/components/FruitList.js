const FruitList = ({ fruitsToDisplay }) => {
  return (
    <div>
      {fruitsToDisplay?.map((singleItem, idx) => (
        <p>{singleItem}</p>
      ))}
    </div>
  );
};

export default FruitList;
