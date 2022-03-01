import { Navbar } from './navbar'
import { Footer } from './footer'

interface Children {
  children: JSX.Element
}

export default function Layout({ children }: Children): JSX.Element {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
