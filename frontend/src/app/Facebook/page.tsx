"use client";

import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";

const page = () => {
  const router = useRouter();

  const handleBackHome = () => {
    router.push("/");
  };
  return (
    <div>
      page
      <div>
        <Button as="a" variant="success" onClick={() => handleBackHome()}>
          Back Home
        </Button>
      </div>
    </div>
  );
};

export default page;
