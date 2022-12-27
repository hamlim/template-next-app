import { greeting } from '@styles/Greeting'

export default function Greeting({ children }) {
  return <marquee className={greeting}>{children}</marquee>
}
