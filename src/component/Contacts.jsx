const Contacts = () => {
  return (
    <main name='contacts' className="w-full h-screen p-4 mt-[100px]  flex justify-center items-center">
        <form className="flex flex-col w-full h-full max-w-[600px]" action="https://getform.io/f/4ad2067f-1328-47af-86e6-90c1a47749a5" method="POST">
            <div className="pb-8">
            <p className="text-4xl font-bold border-b-4 border-b-rose-900 inline">Contact</p>
            </div>
            <input className="mb-[20px] p-[15px] border-none md:w-[500px] sm:w-[90%] bg-gray-300" type="text" placeholder="Name" name="name" />
            <input className="mb-[20px] p-[15px] bg-gray-300 border-none md:w-[500px] sm:w-[90%] " type="email" name="email" placeholder="@emailaddress.com" />
            <textarea className="md:w-[500px] sm:w-[90%] bg-gray-300 pt-[15px] pl-[10px]  resize-none" name="message" placeholder="Message me" rows="10"></textarea>
            <input className="mt-[15px] p-[12px] cursor-pointer text-2xl bg-gray-700 hover:bg-gray-900 text-white md:w-[500px] sm:w-[90%]" type="submit" value="Submit" />
        </form>
    </main>
  )
}

export default Contacts