import Image from 'next/image';

export const Heroes = () => {
  return (
    <div className="flex flex-col items-centre justify-centre max-w-5xl pt-10">
      <div className="flex items-centre">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image
            src="/documents-sky-950.png"
            alt="Man struggling with a lot of documents"
            layout="fill"
            className="object-contain dark:hidden"
          />
          <Image
            src="/documents-slate-300.png"
            alt="Man struggling with a lot of documents"
            layout="fill"
            className="object-contain hidden dark:block"
          />
        </div>
        <div className="relative w-[400px] h-[400px] hidden md:block">
          <Image 
            src="/reading-sky-950.png"
            alt="Unhappy, young woman reading a book, with two stacks of books beside her"
            layout="fill"
            className="object-contain dark:hidden"
          />
          <Image 
            src="/reading-slate-300.png"
            alt="Unhappy, young woman reading a book, with two stacks of books beside her"
            layout="fill"
            className="object-contain hidden dark:block"
          />
        </div>
      </div>
    </div>
  )
}