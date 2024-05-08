
export default function ListHistory() {
  return (
    <>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="p-2 border-b"
          >
            <div className="flex justify-between">
              <div>{i}. Hello world</div>
              <div>Remove</div>
            </div>
            <div>10:20</div>
          </div>
        ))}
    </>
  );
}