"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
  }, [router]);
  return <></>;
}
