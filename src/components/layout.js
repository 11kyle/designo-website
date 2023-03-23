import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-y-40 max-w-2xl lg:max-w-[1110px] px-6 sm:px-10 mx-auto mt-[155px]">
        {children}
      </main>
      <Footer />
    </>
  )
}
