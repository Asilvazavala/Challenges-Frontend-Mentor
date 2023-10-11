"use client"

import Filter from "./Filter";
import Search from "./Search";

const HeaderHome: React.FC = () => {
  return (
    <section className="mt-6 flex flex-col gap-y-6 lg:flex-row justify-between">
      <article className="relative">
        <Search />
      </article>

      <article>
        <Filter />
      </article>
    </section>
  )
};

export default HeaderHome;