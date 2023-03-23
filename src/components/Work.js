import Image from "next/image"

const people = [
  {
    title: "Express",
    description: "Front-end Developer",
    imgSrc: "/web-design/desktop/image-express.jpg",
  },
  // More people...
]

export default function Work({ data }) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <ul
        role="list"
        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        {data.map((item) => (
          <li
            key={item.title}
            className="bg-[#FDF3F0] rounded-[15px] overflow-hidden"
          >
            <Image
              className="w-full object-cover"
              src={item.imgSrc}
              alt=""
              width={350}
              height={320}
            />
            <div className="flex flex-col items-center gap-y-4 h-[158px] mx-8">
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {item.title}
              </h3>
              <p className="text-base leading-7 text-gray-600 text-center">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
