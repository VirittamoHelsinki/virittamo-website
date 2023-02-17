import { PuffLoader } from "react-spinners";

const Loading = () => {
  return (
    <main className="loading__wrapper">
      <PuffLoader color="#050505" speedMultiplier={1} />
    </main>
  );
};

export default Loading;
