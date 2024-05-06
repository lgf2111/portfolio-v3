"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Custom404() {
  const router = useRouter();
  router.replace("/");
  return <></>;
}
