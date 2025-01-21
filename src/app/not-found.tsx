const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white space-y-6 py-12">
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">404</h1>

      <h2 className="text-2xl font-medium text-white/80">페이지를 찾을 수 없습니다</h2>

      <p className="text-center text-white/60 max-w-md">
        요청하신 페이지가 삭제되었거나 잘못된 경로일 수 있습니다. 올바른 주소인지 다시 한 번 확인해주세요.
      </p>

      <a
        href="/"
        className="px-6 py-3 mt-4 text-sm font-medium text-white transition-all rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm"
      >
        홈으로 돌아가기
      </a>
    </div>
  );
};
export default NotFound;
