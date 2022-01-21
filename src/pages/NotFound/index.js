import notFound from '../../assets/not-found.png';

const NotFound = () => {
  return (
    <div className="text-center">
      <img src={notFound} alt="Page not found" />
    </div>
  );
};

export default NotFound;
