export default function Error({ message }: { message: string }) {
  return (
    <div className="w-full h-[50vh] flex items-center justify-center text-default dark:text-white">
      ❌ {message || "에러가 발생했습니다."}
    </div>
  );
}
