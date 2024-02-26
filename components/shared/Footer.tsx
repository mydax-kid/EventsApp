import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
         <Link href="/" className="w-36 flex items-center gap-2">
          <Image 
            src="/assets/images/favicon.png" 
            width={50} 
            height={32}
            alt="Eventa logo" 
            className="rounded-sm"
          />
          <h1 className="font-bold text-2xl">Eventa</h1>
        </Link>

        <p>2023 Eventa. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer