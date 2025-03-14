import { categories } from "@/constant/categoryShowcase"
import { client } from "@/sanity/lib/client"
import Image from "next/image"
import Link from "next/link"

export default async function CategoryShowcase() {

  const res = await client.fetch(`*[_type == 'landingPage'][0].sections[4]
      {'theEssentialHeading': theEssentialHeading,
      'cards': cards[]{'theEssentialImg': theEssentialImg.asset->url
       }}`)

  return (
    <section className="container mx-auto px-4  mb-[84px]">
      <h2 className="mb-8 text-2xl font-medium text-gray-900">{res.theEssentialHeading}</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category:any, index:number) => (
          <Link
            key={category.name}
            href={category.href}
            className="group relative aspect-[440/540] overflow-hidden rounded-lg bg-gray-100"
          >
            <Image
              src={res.cards[index].theEssentialImg}
              alt={`${category.name} category`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
            <div className="absolute bottom-8 left-8">
              <span className="inline-flex items-center rounded-full bg-white px-6 py-2 text-sm font-medium text-gray-900">
                {category.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

