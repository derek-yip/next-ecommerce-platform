'use client'

import React from "react";
import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/Main-nav";
// import getCategories from "@/actions/get-categories";

async function Navbar() {
//   const categories = await getCategories();

  return (
    <nav className={`border-b`}>
      <Container>
        <div className={`relative px-4 sm:px-6 lg:px-8 flex h-16 items-center`}>
          <Link href="/" className={`ml-4 flex lg:ml-0 gap-x-2`}>
            <p>STORE</p>
          </Link>
          <MainNav data={[]} />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
