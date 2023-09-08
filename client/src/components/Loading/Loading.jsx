import { PuffLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="loading__wrapper">
      <PuffLoader color="#050505" speedMultiplier={1} />
    </div>
  )
}

