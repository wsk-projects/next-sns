import Spinner from "../animation/Spiner";

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 bg-white/5 backdrop-blur-xs flex items-center justify-center">
      <Spinner />
    </div>
  );
}
