
type OverlayProps = {
  toggleAddProduct: () => void;
};

export function Overlay({ toggleAddProduct }: OverlayProps) {
  return (
    <div
      onClick={toggleAddProduct}
      className="fixed z-40 top-0 right-0 w-screen h-screen bg-gray-800 opacity-50 "
    ></div>
  );
}
