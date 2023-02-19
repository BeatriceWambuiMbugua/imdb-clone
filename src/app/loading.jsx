export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex justify-center items-center h-screen">
      <img className="h-48" src="spinner.svg" alt="loading" />
    </div>
  );
}
