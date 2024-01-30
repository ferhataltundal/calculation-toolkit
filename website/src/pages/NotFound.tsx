import notFound from "../assets/notfound.svg";
const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-10 items-center justify-center">
      <div className="w-full max-w-[400px]">
        <img src={notFound} alt="" />
      </div>
      <p className="font-medium text-2xl">
        Page not found!{" "}
        <a href="/" className="underline text-blue-500">
          Back home
        </a>
      </p>
    </div>
  );
};

export default NotFound;
