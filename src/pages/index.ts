import { useRouter } from "next/router";
import { useEffect } from "react";

export default function IndexPage() {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      router.push("/general");
    }
  }, [router]);

  return null;
}
