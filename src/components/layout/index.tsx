import { Navbar } from './navbar'
import { Footer } from './footer'

export default function Layout({ children }): JSX.Element {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
