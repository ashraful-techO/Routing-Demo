export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2 style={{backgroundColor: "green", padding: "4rem"}}>Featured Products</h2>
    </>
  );
}
