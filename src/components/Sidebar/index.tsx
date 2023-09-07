import Filters from "../Filters";

const Sidebar = () => {
  return (
    <div className='h-[800px] rounded-md border bg-white sticky top-0 p-4'>
      <div className='text-bodyText font-semibold font-lexend'>
        Find the perfect companion for your family!
      </div>
      <Filters/>
    </div>
  )
}

export default Sidebar;