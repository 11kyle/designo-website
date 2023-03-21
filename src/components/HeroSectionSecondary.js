import Image from 'next/image'
import imageWebDesignDesktop from '../../public/home/desktop/image-web-design-large.jpg'
import imageAppDesignDesktop from '../../public/home/desktop/image-app-design.jpg'
import imageGraphicDesignDesktop from '../../public/home/desktop/image-graphic-design.jpg'
import imageWebDesignTablet from '../../public/home/tablet/image-web-design.jpg'
import imageAppDesignTablet from '../../public/home/tablet/image-app-design.jpg'
import imageGraphicDesignTablet from '../../public/home/tablet/image-graphic-design.jpg'
import imageWebDesignMobile from '../../public/home/mobile/image-web-design.jpg'
import imageAppDesignMobile from '../../public/home/mobile/image-app-design.jpg'
import imageGraphicDesignMobile from '../../public/home/mobile/image-graphic-design.jpg'

export default function Example() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[30px] gap-y-6 max-w-[376px] sm:max-w-none mx-auto">
      <div className="lg:row-start-1 lg:row-span-2 relative isolate overflow-hidden rounded-[15px]">
        <div className="hidden lg:block">
          <Image
            src={imageWebDesignDesktop}
            alt=""
            className="-z-10 object-cover"
          />
        </div>
        <div className="hidden sm:block lg:hidden">
          <Image
            src={imageWebDesignTablet}
            alt=""
            className="-z-10 object-cover"
          />
        </div>
        <div className="sm:hidden">
          <Image
            src={imageWebDesignMobile}
            alt=""
            width="100%"
            className="-z-10 object-cover"
          />
        </div>
        <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Web Design
          </h1>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            View Projects <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="lg:row-start-1 lg:row-span-1 relative isolate overflow-hidden rounded-[15px]">
        <div className="hidden lg:block">
          <Image
            src={imageAppDesignDesktop}
            alt=""
            className="-z-10 object-cover"
          />
        </div>
        <div className="hidden sm:block lg:hidden">
          <Image
            src={imageAppDesignTablet}
            alt=""
            className="-z-10 object-cover"
          />
        </div>
        <div className="sm:hidden">
          <Image
            src={imageAppDesignMobile}
            alt=""
            className="-z-10 object-cover"
          />
        </div>
        <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            App Design
          </h1>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            View Projects <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="lg:row-start-2 lg:row-span-1 relative isolate overflow-hidden rounded-[15px]">
        <div className="hidden lg:block">
          <Image
            src={imageGraphicDesignDesktop}
            alt=""
            className="-z-10 object-cover"
          />
        </div>
        <div className="hidden sm:block lg:hidden">
          <Image
            src={imageGraphicDesignTablet}
            alt=""
            className="-z-10 object-cover"
          />
        </div>
        <div className="sm:hidden">
          <Image
            src={imageGraphicDesignMobile}
            alt=""
            className="-z-10 object-cover"
          />
        </div>
        <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Graphic Design
          </h1>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            View Projects <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}
