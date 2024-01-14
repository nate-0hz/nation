import Image from 'next/image';

export const Heroes = () => {
  return (
    <div className="flex flex-col items-centre justify-centre max-w-5xl">
      <div className="flex items-centre">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image
            src="/documents-xprnt.png"
            alt="Man struggling with a lot of documents"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="relative w-[400px] h-[400px] hidden md:block">
          <Image 
            src="/reading-xprnt.png"
            alt="Unhappy, young woman reading a book, with two stacks of books beside her"
            layout="fill"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}