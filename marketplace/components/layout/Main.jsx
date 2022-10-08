import { Header, Footer } from './';

export function Main({ children }) {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}
