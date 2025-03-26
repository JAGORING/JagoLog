import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-6 py-12">
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-black/50 dark:from-white dark:to-white/50">
        404
      </h1>

      <h2 className="text-2xl font-medium">페이지를 찾을 수 없습니다</h2>

      <p className="text-center max-w-md">
        요청하신 페이지가 삭제되었거나 잘못된 경로일 수 있습니다. 올바른 주소인지 다시 한 번 확인해주세요.
      </p>

      <Link href="/">
        <Button variant="outline"> 홈으로 돌아가기</Button>
      </Link>
    </div>
  );
};
export default NotFound;
