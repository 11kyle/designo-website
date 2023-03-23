import Image from "next/image"

const topics = [
  {
    title: "Passionate",
    description:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a ppurpose. We merge art, design, and technology into exciting new solutions.",
    imageUrl: "/home/desktop/illustration-passionate.svg",
  },
  {
    title: "Resourceful",
    description:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaborations. It guarantees superior results that fulfill our clients' needs.",
    imageUrl: "/home/desktop/illustration-resourceful.svg",
  },
  {
    title: "Friendly",
    description:
      "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
    imageUrl: "/home/desktop/illustration-friendly.svg",
  },
]

export default function Card() {
  return (
    <div className="">
      <div className="mx-auto text-center sm:text-left lg:text-center lg:px-8">
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {topics.map((topic) => (
            <li
              key={topic.title}
              className="flex flex-col sm:flex-row lg:flex-col gap-x-12 rounded-2xl px-8"
            >
              <Image
                className="mx-auto h-52 w-52 rounded-full bg-gradient-to-r from-orange-100 to-white md:h-56 md:w-56"
                src={topic.imageUrl}
                width={100}
                height={100}
                alt=""
              />
              <div>
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight mb-4">
                  {topic.title}
                </h3>
                <p className="text-sm leading-6 text-gray-400">
                  {topic.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
