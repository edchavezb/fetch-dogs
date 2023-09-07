import { useAtom } from "jotai";
import { userAtom } from "../../core/store/userAtom";
import Filters from "../Filters";

const Sidebar = () => {
  const [storeUser, setStoreUser] = useAtom(userAtom);

  if (!storeUser.isLoggedIn){
    return (
      <></>
    )
  }

  return (
    <div className='rounded-md border bg-white sticky top-0 p-4'>
      <div className='text-bodyText font-semibold font-lexend'>
        Filter your search
      </div>
      <Filters/>
    </div>
  )
}

export default Sidebar;