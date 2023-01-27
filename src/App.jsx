
function App() {

  return (
    <main className="flex flex-col h-screen md:flex-row lg:text-[1.125rem]">
      <div className=" min-h-[50vh] bg-splash-image bg-no-repeat bg-cover bg-center bg-darkgrey bg-blend-multiply text-white/90 text-center md:w-[60%] pb-7">
        <div className="w-[90%] max-w-[450px] mx-auto h-full flex flex-col justify-between items-center">
          <h1 className="text-[2.25rem] leading-[1.1] lg:text-[3.5rem]">Learn how to make <strong className="text-white">the best BBQ ribs</strong> in town</h1>
          <p className="text-orange font-black uppercase">Join us for this live webinar</p>
          <p className="text-orange text-[0.625rem] tracking-widest uppercase font-black pt-1 border-t-orange border-t-4 order-[-1] lg:text-[.7rem]">Mouthwateringly delicious</p>
        </div>
      </div>
      <div className=" text-darkgrey text-center py-7 md:w-[40%] flex flex-col justify-center items-center">
        <div className="w-[90%] max-w-[450px]">
          <h2 className="text-[1.3125rem] font-black lg:text-[2.2rem]">Become a BBQ master! </h2>
          <p className="font-black text-orange uppercase mb-4">Register Today</p>
          <p className="mb-4">BBQ isn't just standing in front of your grill with it on full blast and hoping for the best. It's an art! One way to speed up the process is to learn from the best. You can do just that by signing up for this free webinar!</p>
          <form action="" className="w-full grid gap-2 mb-2">
            <input type="text" required placeholder="first name" className="border border-1 rounded-[5px] text-center py-[.5em] scale-100 focus:scale-110" />
            <input type="email" required placeholder="email" className="border border-1 rounded-[5px] text-center py-[.5em] scale-100 focus:scale-110" />
            <button className="bg-gradient-to-l from-[#FF713B] to-[#FFA51D] border border-1 border-orange rounded-[5px] text-center text-white uppercase font-black py-[.5em] scale-100 focus:scale-110 hover:scale-110" type="submit">Register</button>
          </form>
          <p className="text-[0.625rem] lg:text-[.7rem]">We'll never share your information without your permission</p>
        </div>
      </div>
    </main>
  )
}

export default App
